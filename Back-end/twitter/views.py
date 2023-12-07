from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from .models import User, Post, Comment, Like, Follow, Bookmark
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import UserSerializers, PostSerializers, CommentSerializers, LikeSerializers, FollowSerializers, BookmarkSerializers
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie, csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import AnonymousUser
from django.utils.decorators import method_decorator
# Create your views here.

@method_decorator(csrf_protect, name='dispatch')
class signup_view(APIView):
    permission_classes = [permissions.AllowAny]

    def post (self, requset, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']
        re_password = data['re_password']

        if password == re_password:
            if User.objects.filter(username=username).exists():
                return Response({'error':'user already exixst'}, status.HTTP_400_BAD_REQUEST)

            if len(password) < 8:
                    return Response({'error':'password must be 8 charechtars long'}, status.HTTP_400_BAD_REQUEST)

            new_user = User.objects.create_user(username=username, password=password)
            new_user.save()

            return Response({'message':'user craeted'}, status.HTTP_201_CREATED)

        else:
            return Response({'error':'password and repassword must be the same'}, status.HTTP_400_BAD_REQUEST)



@method_decorator(csrf_protect, name='dispatch')
class login_view(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, requset, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            login(requset, user)
            return Response({'message':'login succseful usernmae' + ' ' + username}, status.HTTP_200_OK)
        else:
            return Response({'error':'authintectaion failed'}, status.HTTP_400_BAD_REQUEST)



class logout_view(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, requset, format=None):
        try:
            logout(requset)
            return Response({'message':'logout sucsseful'}, status.HTTP_200_OK)
        except:
            return Response({'error':'something went wrong'}, status.HTTP_500_INTERNAL_SERVER_ERROR)



@method_decorator(ensure_csrf_cookie, name='dispatch')
class getCSRFToken(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        return Response({'message':'csrf token generated'})



class getCurrentUser(APIView):
    def get (self, request, format=None):
        if request.user == AnonymousUser():
            return Response({'error':'not logged in'})

        serialized_user = UserSerializers(self.request.user)
        return Response(serialized_user.data, status.HTTP_200_OK)



class get_post_feed(generics.ListAPIView):
    queryset = Post.objects.filter(is_comment=False).order_by('-created_at')
    serializer_class = PostSerializers



class get_post_feed_by_user(generics.ListAPIView):
    serializer_class = PostSerializers

    def get_queryset(self):
        user = get_object_or_404(User, id=self.kwargs['pk'])
        if user:
            return Post.objects.filter(user_post=user, is_comment=False).order_by('-created_at')

        return Response({'error':'user is not found'}, status.HTTP_400_BAD_REQUEST)



class get_comments_for_post(generics.ListAPIView):
    serializer_class = PostSerializers

    def get_queryset(self):
        post = get_object_or_404(Post, id=self.kwargs['pk'])
        if post:
            return Comment.objects.filter(post=post).order_by('-created_at')

        return Response({'error':'post not found'}, status.HTTP_400_BAD_REQUEST)



class get_post_feed_by_followings(generics.ListAPIView):
    serializer_class = PostSerializers

    def get_queryset(self):
        user = self.request.user
        if user:
            following_query = Follow.objects.filter(following=user)

            if following_query.exists():
                return Post.objects.filter(user_post__in=following_query)

            return Post.objects.none()

        raise ValueError('User not found')



class get_post_with_comments(generics.ListAPIView):
    serializer_class = PostSerializers
#model_combination = model_set1.union(model_set2, all=TRUE)
    def get_queryset(self):
        post = Post.objects.filter(id=1).prefetch_related('post_comment')
        comments = post[0].post_comment.all()
        post_with_comments = post.union(comments, all=True)
        return post_with_comments



class get_liked_posts(generics.ListAPIView):
    serializer_class = PostSerializers

    def get_queryset(self):
        return Post.objects.filter(post_like__user_like=self.request.user)



class get_bookmarked_posts(generics.ListAPIView):
    serializer_class = PostSerializers

    def get_queryset(self):
        return Post.objects.filter(post_bookmark__user_bookmark=self.request.user)



class make_post(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializers

    def post(self, request, *args, **kwargs):
        post = Post.objects.create(
            user_post = request.user,
            post_content = self.request.data['post_content'],
            post_img = self.request.data['post_img'],
            likes = 0
        )

        user = request.user
        user.post_count += 1
        user.save()

        serialized_items = PostSerializers(post)
        return Response(serialized_items.data, status.HTTP_201_CREATED)



class comment(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializers

    def get_queryset(self):
        if self.request.method == 'GET':
            return Comment.objects.filter(post__id=self.kwargs['pk'])

    def post(self, request, *args, **kwargs):

        comment = Comment.objects.create(
            user_post = request.user,
            post_content = self.request.data['post_content'],
            post_img = self.request.data['post_img'],
            is_comment = True,
            post = get_object_or_404(Post, id=self.kwargs['pk']),
            likes = 0,
        )

        user = request.user
        user.post_count += 1
        user.save()

        serialized_items = PostSerializers(comment)
        return Response(serialized_items.data, status.HTTP_201_CREATED)



class add_like(generics.CreateAPIView):
    serializer_class = LikeSerializers

    def post(self, request, *args, **kwargs):
        post = get_object_or_404(Post, id=self.kwargs['pk'])

        if Like.objects.filter(user_like=request.user, post=post).exists():
            Like.objects.filter(user_like=request.user, post=post).delete()

            post.likes -= 1
            post.save()
            return Response({'message:':'dislike succesfull'}, status.HTTP_200_OK)

        like = Like.objects.create(
            user_like = request.user,
            post = post
        )

        post.likes += 1
        post.save()

        serialized_items = LikeSerializers(like)
        return Response(serialized_items.data, status.HTTP_201_CREATED)



class add_bookmark(generics.CreateAPIView):
    serializer_class = BookmarkSerializers

    def post(self, request, *args, **kwargs):
        post = get_object_or_404(Post, id=self.kwargs['pk'])
        user = request.user
        if Bookmark.objects.filter(user_bookmark=user, post=post):
            Bookmark.objects.filter(user_bookmark=user, post=post).delete()

        if user.bookmark_count > 0:
            user.bookmark_count -= 1
            user.save()

        if post.bookmark > 0:
            post.bookmark -= 1
            post.save()

            return Response({'success:':'removed bookmark'}, status.HTTP_200_OK)

        bookmark = Bookmark.objects.create(
            user_bookmark = user,
            post = post
        )

        user.bookmark_count += 1
        user.save()

        post.bookmark +=1
        post.save()

        serialized_items = BookmarkSerializers(bookmark)
        return Response(serialized_items.data, status.HTTP_201_CREATED)



class edit_or_delete_post(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializers



class show_users(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers



class Follow_view(generics.CreateAPIView):
    serializer_class = FollowSerializers

    def post(self, request, *args, **kwargs):
        to_follow = get_object_or_404(User, id=self.kwargs['pk'])
        user= request.user

        if user == to_follow:
            return Response({'message:':'you cant follow you self'})

        if Follow.objects.filter(to_follow=to_follow, following=user).exists():
            return Response({'message':'already followed'})

        follow = Follow.objects.create(
            to_follow=to_follow,
            following=user
        )

        to_follow.followers_count += 1
        to_follow.save()
        user.following_count +=1
        user.save()

        serialized_items = FollowSerializers(follow)
        return Response(serialized_items.data, status.HTTP_201_CREATED)



@method_decorator(csrf_exempt, name='dispatch')
class Unfollow(generics.DestroyAPIView):
    def destroy(self, request, *args, **kwargs):
        to_follow = get_object_or_404(User, id=self.kwargs['pk'])
        user = request.user

        if Follow.objects.filter(to_follow=to_follow, following=user).exists():
            Follow.objects.filter(to_follow=to_follow, following=user).delete()
            to_follow.followers_count -= 1
            user.following_count -=1
            to_follow.save()
            user.save()
            return Response({'message':f'user:{user} unfollowed user:{to_follow}'})
        else:
            return Response({'message':'user is not followed'})



class show_following(generics.ListAPIView):
    serializer_class = UserSerializers

    def get_queryset(self):
        user = get_object_or_404(User, id=self.kwargs['pk'])
        following_query = Follow.objects.filter(following=user)
        following_ids = following_query.values_list('to_follow', flat=True)

        return User.objects.filter(id__in=following_ids)



class show_followers(generics.ListAPIView):
    serializer_class = UserSerializers

    def get_queryset(self):
        user = get_object_or_404(User, id=self.kwargs['pk'])
        following_query = Follow.objects.filter(to_follow=user)
        following_ids = following_query.values_list('following', flat=True)

        return User.objects.filter(id__in=following_ids)
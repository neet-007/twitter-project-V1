from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from .models import User, Post, Comment, Like, Follow
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import UserSerializers, PostSerializers, CommentSerializers, LikeSerializers, FollowSerializers
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from django.contrib.auth import authenticate, login, logout
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



class get_post_feed(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializers



class get_post_feed_by_user(generics.ListAPIView):
    serializer_class = PostSerializers

    def get_queryset(self):
        user = get_object_or_404(User, id=self.kwargs['pk'])
        return Post.objects.filter(user_post=user)



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
            post_content = request.POST.get('post_content'),
            post_img = request.POST.get('post_img'),
            likes = 0,
            post = get_object_or_404(Post, id=self.kwargs['pk'])
        )

        serialized_items = CommentSerializers(comment)
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
    serializer_class = FollowSerializers

    def get_queryset(self):
        return Follow.objects.filter(following=self.kwargs['pk'])



class show_followers(generics.ListAPIView):
    serializer_class = FollowSerializers

    def get_queryset(self):
        return Follow.objects.filter(to_follow=self.kwargs['pk'])
from django.shortcuts import render
from rest_framework import generics, status
from .models import User, Post, Comment, Like, Follow
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import UserSerializers, PostSerializers, CommentSerializers, LikeSerializers, FollowSerializers
# Create your views here.

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
            post_content = request.POST.get('post_content'),
            post_img = request.POST.get('post_img'),
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


class add_like(generics.UpdateAPIView):
    serializer_class = LikeSerializers

    def put(self, request, *args, **kwargs):
        post = get_object_or_404(Post, id=self.kwargs['pk'])

        if Like.objects.filter(user_like=request.user, post=post).exists():
            return Response({'message:':'remeber to dislike'})

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
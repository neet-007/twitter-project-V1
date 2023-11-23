from django.shortcuts import render
from rest_framework import generics, status
from .models import User, Post, Comment, Like, Follow
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
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

    """def post(self, request, *args, **kwargs):
        Post.objects.create(
            user_post = request.user,
            post_content = request.POST.get('post_content'),
            post_img = request.POST.get('post_img'),
            likes = 0
        )
        (request.user).update(post_count = post_count + 1)"""

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
    pass

class edit_or_delete_post(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializers

class show_users(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers

class show_following(generics.ListAPIView):
    serializer_class = FollowSerializers
    def get_queryset(self):
        return Follow.objects.filter(following=self.request.user)

class show_followers(generics.ListAPIView):
    serializer_class = FollowSerializers
    def get_queryset(self):
        return Follow.objects.filter(to_follow=self.request.user)
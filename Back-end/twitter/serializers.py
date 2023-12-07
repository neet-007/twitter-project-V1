from rest_framework import serializers
from .models import User, Post, Comment, Like, Follow, Bookmark

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'bio', 'mention', 'followers_count', 'following_count', 'post_count']

class PostSerializers(serializers.ModelSerializer):
    user_post = UserSerializers(read_only=True)
    likes = serializers.IntegerField(read_only=True)
    is_comment = serializers.BooleanField(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'

class LikeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

class BookmarkSerializers(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = '__all__'

class FollowSerializers(serializers.ModelSerializer):
    to_follow = UserSerializers(read_only=True)
    following = UserSerializers(read_only=True)
    class Meta:
        model = Follow
        fields = '__all__'

class CommentSerializers(serializers.ModelSerializer):
    post = PostSerializers(read_only=True)
    user_post = UserSerializers(read_only=True)
    likes = serializers.IntegerField(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'
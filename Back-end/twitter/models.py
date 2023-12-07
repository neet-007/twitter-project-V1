from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    bio = models.CharField(max_length=150, null=True, blank=True)
    mention = models.CharField(max_length=50)
    profile_pic = models.ImageField(null=True, blank=True)
    followers_count = models.IntegerField(default=0)
    following_count = models.IntegerField(default=0)
    post_count = models.IntegerField(default=0)
    bookmark_count = models.IntegerField(default=0)
    def __str__(self) -> str:
        return f'{self.username}'

class Lists(models.Model):
    user_list = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_list')
    list_name = models.CharField(max_length=255)
    descritpion = models.CharField(max_length=255, blank=True)
    craeted_at = models.DateTimeField(auto_now=True)

class Post(models.Model):
    user_post = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_post')
    post_content = models.CharField(max_length=240)
    post_img = models.ImageField(null=True, blank=True)
    is_comment = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    list = models.ManyToManyField(Lists)
    comment_count = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    bookmark = models.IntegerField(default=0)

    def __str__(self) -> str:
        return f'user: {self.user_post.username}, content: {self.post_content}'

class Like(models.Model):
    user_like = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_like')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_like')

class Bookmark(models.Model):
    user_bookmark = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_bookmark')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_bookmark')

class Follow(models.Model):
    to_follow = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_following")
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_followers")

class Comment(Post, models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_comment')

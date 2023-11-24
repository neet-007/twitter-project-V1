from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.
'''class User(AbstractUser):
    bio = models.CharField(max_length=150, null=True, blank=True)
    mention = models.CharField(max_length=50)
    profile_pic = models.ImageField(null=True, blank=True)
    followers_count = models.IntegerField(default=0)
    following_count = models.IntegerField(default=0)
    post_count = models.IntegerField(default=0)
    def __str__(self) -> str:
        return f'{self.username}'''
class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            return ValueError("users must have email")

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save()

        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email

class Post(models.Model):
    user_post = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_post')
    post_content = models.CharField(max_length=240)
    post_img = models.ImageField(null=True, blank=True)
    is_comment = models.BooleanField(default=False)
    likes = models.IntegerField(default=0)

    def __str__(self) -> str:
        return f'user: {self.user_post.username}, content: {self.post_content}'

class Like(models.Model):
    user_like = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_like')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_like')

    def __str__(self) -> str:
        return f'user: {self.user_like} liked post: id:{self.post__id}, content:{self.post__post_content}'
class Follow(models.Model):
    to_follow = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_following")
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_followers")

    def __str__(self) -> str:
        return f'user: {self.following} followed user: {self.to_follow}'

class Comment(Post, models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_comment')

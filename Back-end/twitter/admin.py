from django.contrib import admin
from . models import User, Post, Like, Follow, Comment, Bookmark, Lists
# Register your models here.
admin.site.register(User)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Like)
admin.site.register(Bookmark)
admin.site.register(Follow)
admin.site.register(Lists)
from django.urls import path, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('signup', views.signup_view.as_view(), name='signup'),
    path('csrf-token', views.getCSRFToken.as_view(), name='csrf-token'),
    path('login', views.login_view.as_view(), name='login'),
    path('logout', views.logout_view.as_view(), name='logout'),
    path('current-user', views.getCurrentUser.as_view(), name='current-user'),
    path('post-feed', views.get_post_feed.as_view(), name='post-feed'),
    path('post-feed-by-user/<int:pk>', views.get_post_feed_by_user.as_view(), name='post-feed-by-user'),
    path('post-feed-by-following', views.get_post_feed_by_followings.as_view(), name='post-feed-by-following'),
    path('bookmarked-posts', views.get_bookmarked_posts.as_view(), name='bookmark-posts'),
    path('user-lists', views.show_user_lists.as_view(), name='user-lists'),
    path('liked-posts', views.get_liked_posts.as_view(), name='liked-posts'),
    #path('post-with-comments/<int:pk>', views.get_post_with_comments.as_view(), name='post-with-comments'),
    path('make-post', views.make_post.as_view(), name='make-post'),
    path('make-list', views.add_new_list.as_view(), name='make-list'),
    path('comment/<int:pk>', views.comment.as_view(), name='make-comment'),
    path('comments-for-post/<int:pk>', views.get_comments_for_post.as_view(), name='comments-for-post'),
    path('add-like/<int:pk>', views.add_like.as_view(), name='add-like'),
    path('add-bookmark/<int:pk>', views.add_bookmark.as_view(), name='add-bookmark'),
    path('edit-or-delete-post/<int:pk>',views.edit_or_delete_post.as_view(), name='edit-or-delete-post'),
    path('show-users', views.show_users.as_view(), name='show-users'),
    path('show-followers/<int:pk>', views.show_followers.as_view(), name='show-followers'),
    path('show-following/<int:pk>', views.show_following.as_view(), name='show-following'),
    path('follow/<int:pk>', views.Follow_view.as_view(), name='follow'),
    path('unfollow/<int:pk>', views.Unfollow.as_view(), name='unfollow')
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
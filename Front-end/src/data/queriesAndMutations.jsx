import {useQuery, useMutation, useQueryClient, useInfiniteQuery} from '@tanstack/react-query'
import { addBookmark, addLike, follow, getCommentsForPost, getPostWithComments, getPosts, getPostsByFollowing, getPostsByUser, getUserFollowers, getUserFollowing, logIn, logOut, newComment, newPost, register, showUsers, unFollow } from './api'

export const useRegister = () => {
    return useMutation({
        mutationFn: ({username, password, re_password}) => register({username, password, re_password})
    })
}
export const useLogIn = () => {
    return useMutation({
        mutationFn: ({username, password}) => logIn({username, password}),
    })
}
export const useLogOut = () => {
    return useMutation({
        mutationFn:logOut
    })
}
export const useGetPosts = () => {
    return useQuery({
        queryKey:['posts'],
        queryFn: getPosts
    })
}
export const useGetPostByUser = (id) => {
    return useQuery({
        queryKey:['posts-by-user', id],
        queryFn: () => getPostsByUser(id)
    })
}
export const useGetPostsByFollowing = () => {
    return useQuery({
        queryKey:['post-feed-by-following'],
        queryFn: getPostsByFollowing
    })
}
export const useGetCommentsForPost = (id) => {
    return useQuery({
        queryKey:['comments-for-post', id],
        queryFn: () => getCommentsForPost(id)
    })
}
export const useGetPostWithComments = (id) => {
    return useQuery({
        queryKey:['post-with-comments', id],
        queryFn: () => getPostWithComments(id)
    })
}
export const useShowusers = () => {
    return useQuery({
        queryKey:['all-users'],
        queryFn: showUsers,
    })
}
export const useNewPost = () => {
    return useMutation({
        mutationFn: ({post_content, post_img}) => newPost({post_content, post_img}),
    })
}
export const useNewComment = () => {
    return useMutation({
        mutationFn: ({id, post_content, post_img}) => newComment({id, post_content, post_img})
    })
}
export const useAddLike = () => {
    return useMutation({
        mutationFn: (post_id) => addLike (post_id)
    })
}
export const useAddBookmark = () => {
    return useMutation({
        mutationFn: (post_id) => addBookmark (post_id)
    })
}
export const useFollow = () => {
    return useMutation({
        mutationFn: (id) => follow(id)
    })
}
export const useUnFollow = () => {
    return useMutation({
        mutationFn: (id) => unFollow (id)
    })
}
export const useGetUserFollowing = (id) => {
    return useQuery({
        queryKey: ['user-following', id],
        queryFn: () => getUserFollowing (id)
    })
}
export const useGetUserFollowers = (id) => {
    return useQuery({
        queryKey: ['user-followers', id],
        queryFn: () => getUserFollowers (id)
    })
}
import {useQuery, useMutation, useQueryClient, useInfiniteQuery} from '@tanstack/react-query'
import { addLike, follow, getPosts, getPostsByUser, logIn, logOut, newPost, register, showUsers, unFollow } from './api'

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
export const useAddLike = () => {
    return useMutation({
        mutationFn: (post_id) => addLike (post_id)
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
import axios from 'axios'
import Cookies from 'js-cookie'
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/twitter'
  }
)

const register = async ({username, password, re_password}) =>{
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log(Cookies.get('csrftoken'))
    let data = await axios.post('/twitter/signup', {username, password, re_password}, config)
    console.log(data)
  }catch(e){
      console.log(e)
  }
}

const logIn = async ({username, password}) =>{
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log(Cookies.get('csrftoken'))
    let data = await axios.post('/twitter/login', {username, password}, config)
    console.log(data)
  }catch(e){
      console.log(e)
  }
}

const logOut = async () => {
const config = {
  headers: {
    'Accept':'application/json',
    'Content-type':'application/json',
    'X-CSRFToken': Cookies.get('csrftoken')
  }

}
try{
  console.log(Cookies.get('csrftoken'))
  let data = await axios.post('/twitter/logout', {}, config)
  console.log(data)
}catch(e){
    console.log(e)
}
}

const getCurrentUser = async () => {
  try {
    const response = await axios.get('/twitter/current-user');
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getPosts = async () => {
  try {
    const response = await axios.get('/twitter/post-feed');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

const getPostsByUser = async (id) => {
  try {
    const response = await axios.get(`/twitter/post-feed-by-user/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
//post-feed-by-following
const getPostsByFollowing = async () => {
  try {
    const response = await axios.get(`/twitter/post-feed-by-following`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getCommentsForPost = async (id) => {
  try {
    const response = await axios.get(`/twitter/comments-for-post/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getPostWithComments = async (id) => {
  try {
    const response = await axios.get(`/twitter/post-with-comments/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const showUsers = async () =>{
  try{
    const response = await axios.get('/twitter/show-users')
    return response.data
  }catch(e){
    console.log(e)
  }
}

const newPost = async ({post_content, post_img}) =>{
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log({post_content})
    let data = await axios.post('/twitter/make-post', {post_content, post_img}, config)
    console.log(data)
  }catch(e){
      console.log(e)
  }
}

const newComment = async ({id, post_content, post_img}) => {
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log({post_content})
    let data = await axios.post(`/twitter/comment/${id}`, {post_content:post_content, post_img:post_img}, config)
    console.log(data)
  }catch(e){
      console.log(e)
  }
}

const addLike = async (post_id) =>{
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log(post_id)
    let data = await axios.post(`/twitter/add-like/${post_id}`, {}, config)
    console.log(data)
  }catch(e){
      console.log(e)
  }
}

const addBookmark = async (post_id) => {
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log(post_id)
    let data = await axios.post(`/twitter/add-bookmark/${post_id}`, {}, config)
    console.log(data)
  }catch(e){
      console.log(e)
  }
}

const follow = async (id) => {
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
}
try{
  console.log(id)
  let data = await axios.post(`/twitter/follow/${id}`, {}, config)
  console.log(data)
}catch(e){
    console.log(e)
}
}

const unFollow = async (id) => {
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
}
try{
  console.log(id)
  let data = await axios.delete(`/twitter/unfollow/${id}`, {}, config)
  console.log(data)
}catch(e){
    console.log(e)
}
}

const getUserFollowing = async (id) => {
  try {
    const response = await axios.get(`/twitter/show-following/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getUserFollowers = async (id) => {
  try {
    const response = await axios.get(`/twitter/show-followers/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export {register, logIn, logOut, getCurrentUser, showUsers, getPosts, getPostsByUser, getPostsByFollowing, getCommentsForPost, getPostWithComments, newPost, newComment, addLike, addBookmark, follow, unFollow, getUserFollowing, getUserFollowers}
import axios from 'axios'
import Cookies from 'js-cookie'
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/twitter'
  }
)

const register = async (username, password, re_password) =>{
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log(Cookies.get('csrftoken'))
    let data = await axios.post('/twitter/signup', {'username':username, 'password':password, 're_password':re_password}, config)
    console.log(data)
  }catch(e){
      console.log(e)
  }
}

const logIn = async (username, password) =>{
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log(Cookies.get('csrftoken'))
    let data = await axios.post('/twitter/login', {'username':username, 'password':password}, config)
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

const getPosts = async () =>{
    try{
        let data = await axios.get('/twitter/post-feed')
        return data
    }catch(e){
      console.log(e)
    }
}

const showUsers = async () =>{
  try{
    let data = await axios.get('/twitter/show-users')
    console.log(data.data)
  }catch(e){
    console.log(e)
  }
}

const newPost = async (post_content, img) =>{
  const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }

  }
  try{
    console.log(post_content)
    let data = await axios.post('/twitter/make-post', {'post_content':post_content, 'post_img':img}, config)
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

export {register, logIn, logOut, showUsers, getPosts, newPost, addLike}
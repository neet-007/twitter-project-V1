import axios from 'axios'
import Cookies from 'js-cookie'
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/twitter'
  }
)

const getPosts = async () =>{
    try{
      let data = await api.get('/post-feed')
      return (data.data)
    }catch(e){
      console.log(e)
    }
  }
//export default getPosts

const showUsers = async () =>{
  try{
    let data = await api.get('/show-users')
    console.log(data.data)
  }catch(e){
    console.log(e)
  }
}

const newPost = async () =>{
    const config = {
      headers: {
        'Accept':'application/json',
        'Content-type':'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      }

    }
    try{
      console.log(Cookies.get('csrftoken'))
      let data = await api.post('/login', {'username':'user1', 'password':'12345678'}, config)
      console.log(data)
    }catch(e){
        console.log(e)
    }
}
export {getPosts, newPost, showUsers}
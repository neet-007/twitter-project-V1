import React, {useState, useEffect}from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/twitter'
  }
)


const  CSRFToken = () => {
    const [csrfToken, setCsrfToken] = useState('')
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();

                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

  useEffect(()=>{
    const fetchData = async () => {
        try {
           const data = await axios.get('/twitter/csrf-token', {withCredentials:true})
           console.log(data)
        } catch (error) {
            console.log(error)
        }

    }
    fetchData()
    setCsrfToken(getCookie('csrftoken'))
    console.log(csrfToken)
  },[])
  return (
    <input type="hidden" name='csrfmiddlewaretoken' value={csrfToken} readOnly/>
  )
}

export default CSRFToken
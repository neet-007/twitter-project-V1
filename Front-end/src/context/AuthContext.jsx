import React, {createContext, useContext, useEffect, useState} from 'react'
import { getCurrentUser } from '../data/api'
import { useNavigate } from 'react-router-dom'

/*
  WHEN THE USER IS LOGGED IN THE USER STATE IS NOT SET BUT THEN AFTER REFRESH ITS SET
  ALSO WHEN THE USER IS LOGGED OUT THE USER STATA IS NOT SET INSTANTLEY --PROBOPLY HAS
  TO DO WITH ASYNC FUNCTIONS OR THE FACT THE THE STATE DOESNT CHANGE INSTALNELY BECOUSE ITS JUST A COPY OF THE STATE
*/


export const INITIAL_USER = {
    id:'',
    username:'',
    mention:'',
    bio:'',
    followingCount:'',
    followersCount:'',
    post_count:'',
}

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false
}

const AuthContext = createContext(INITIAL_STATE)

function AuthProvider({children}) {
  const [user, setUser] = useState(INITIAL_USER)
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate()
  const checkAuthUser = async () => {
    try {
        const currnetUser = await getCurrentUser()
        if (!currnetUser.error) {
            setUser({
                id:currnetUser.id,
                username:currnetUser.username,
                mention:currnetUser.mention,
                bio:currnetUser.bio,
                followingCount:currnetUser.followingCount,
                followersCount:currnetUser.followersCount,
                post_count:currnetUser.post_count
            })

            setIsAuthenticated(true)
            return true
        }
    return false
    } catch (error) {
        console.log(error)
        return false
    } finally{
        setIsLoading(false)
    }
  }
  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser
  }

  useEffect(() => {
    console.log(user)
    checkAuthUser().then(res => {if (!res) navigate('/log-in')})
  },[])
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useUserContetx = () => useContext(AuthContext)
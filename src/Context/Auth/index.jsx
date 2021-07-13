import { useReducer, createContext } from 'react'
import { useEffect } from 'react'
import { authReducer, init } from './authReducer'

export const Context = createContext({
  error: 'No permission'
})

const AuthContext = ({ children }) => {
  
  const [authState, dispatch] = useReducer(authReducer, {}, init)
  
  useEffect(() => {
    window.localStorage.setItem('authState', JSON.stringify(authState))
  }, [authState])

  return (
    <Context.Provider value={{authState, dispatch}}>
      { children }
    </Context.Provider>
  )
}

export default AuthContext

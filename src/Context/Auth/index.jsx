import { useReducer, createContext } from 'react'
import { authReducer } from './authReducer'

export const Context = createContext({
  error: 'No permission'
})

const AuthContext = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, { auth: false })

  return (
    <Context.Provider value={{authState, dispatch}}>
      { children }
    </Context.Provider>
  )
}

export default AuthContext

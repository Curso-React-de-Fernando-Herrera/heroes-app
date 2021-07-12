import { useContext } from 'react'
import { Context } from 'Context/Auth'
import { Button } from './styles'

const LogInOut = () => {
  const { authState, dispatch } = useContext(Context)

  const handleLoginOut = () => dispatch({ type: 'logout' })

  return (
    <Button onClick={ handleLoginOut }>
      { authState.auth
        ? 'Logout'
        : 'Login'
      }
    </Button>
  )
}

export default LogInOut

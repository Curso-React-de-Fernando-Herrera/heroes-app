import React from 'react'

import { useContext } from 'react'
import { Context } from 'Context/Auth'
import { Button } from './styles'

const LogInOut = () => {
  const { authState, dispatch } = useContext(Context)

  const handleLoginOut = () => {
    authState.auth
      ? dispatch({ type: 'logout' })
      : dispatch({
        type: 'login',
        payload: {
          name: 'Madeval',
          auth: true
        }
      })
  }

  return (
    <Button onClick={ handleLoginOut }>
      { authState.auth
        ? 'Logout'
        : 'Login'
      }
    </Button>
  )
}

export default React.memo(LogInOut)

import { handleReplaceLink } from 'hooks/handleReplaceLink/handleReplaceLink'
import React from 'react'

const LoginScreen = ({ history }) => {
  const { handleReplace } = handleReplaceLink({ history, path: "/" })

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleReplace}>Volver</button>
    </>
  )
}

export default LoginScreen

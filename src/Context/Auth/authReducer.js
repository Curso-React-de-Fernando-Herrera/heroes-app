export const init = () => {
  return JSON.parse(window.localStorage.getItem('authState')) || { auth: false }
}

export const authReducer = (state, action) => {
  const { type, payload } = action
  
  switch (type) {
    case 'login':
      return {
        ...state,
        ...payload
      }
    
    case 'logout':
      return {
        auth: false
      }
  
    default:
      return state
  }

}
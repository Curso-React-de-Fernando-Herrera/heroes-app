export const authReducer = (state, action) => {

  switch (action.type) {
    case 'login':
      return {
        ...state,
        auth: true
      }
    
    case 'logout':
      return {
        auth: false
      }
  
    default:
      return state
  }

}
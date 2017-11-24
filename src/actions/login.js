const ACTIONS = require('./types')
export const HANDLE_LOGIN= 'HANDLE_LOGIN'
export const handleLogin = (data) => ({
  type: HANDLE_LOGIN,
  userdata: data
})

export const setError = (error) => ({
    type: ACTIONS.SET_ERROR,
    error
})
export const SET_SELECTED_ACCOUNT= 'SET_SELECTED_ACCOUNT'
export const setSelectedAccount=(acct)=>{
    return{
        selectedAccount:acct,
        type:SET_SELECTED_ACCOUNT
    }
}
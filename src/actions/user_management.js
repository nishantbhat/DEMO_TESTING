import * as ACTIONS from './types'

export const GET_USERS= 'GET_USERS'


export const setError = (error) => ({
    type: ACTIONS.SET_ERROR,
    error
})
export const getUsers = (data) => ({
    type:GET_USERS,
    users: data
})

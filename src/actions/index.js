import * as ACTIONS from './types'
export const SET_TENPRINTS= 'SET_TENPRINTS'
export const GET_USERS= 'GET_USERS'
export const setTenprints = (data) => ({
  type:SET_TENPRINTS,
  tenprints: data
})

export const setError = (error) => ({
    type: ACTIONS.SET_ERROR,
    error
})
export const getUsers = (data) => ({
    type:GET_USERS,
    users: data
})

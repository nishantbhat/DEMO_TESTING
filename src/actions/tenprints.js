import * as ACTIONS from './types'
export const SET_TENPRINTS= 'SET_TENPRINTS'

export const setTenprints = (data) => ({
  type:SET_TENPRINTS,
  tenprints: data
})

export const setError = (error) => ({
    type: ACTIONS.SET_ERROR,
    error
})
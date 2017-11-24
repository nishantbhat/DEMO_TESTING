import * as ACTIONS from '../actions/types'

const initialState = []

const users = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.GET_USERS:
    return action.users;
  default:
    return state
  }
}

export default users

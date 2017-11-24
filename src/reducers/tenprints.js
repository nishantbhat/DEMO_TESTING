import * as ACTIONS from '../actions/types'

const initialState = []

const tenprints = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.SET_TENPRINTS:
    return action.tenprints;
  default:
    return state
  }
}
export default tenprints

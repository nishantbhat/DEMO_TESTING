import { combineReducers } from 'redux'
import tenprints from './tenprints'
import users from './user_management'

const rootReducer = combineReducers({
    tenprints,users
})

export default rootReducer

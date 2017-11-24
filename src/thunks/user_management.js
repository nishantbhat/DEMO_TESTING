import getUsersFromApi from '../api/users'
import { getUsers, setError } from '../actions/user_management'

const fetchUsers = (auth) => (dispatch,getState) => {
    console.log(auth)
    getUsersFromApi()
        .then((data)=>{
            dispatch(getUsers(data));
        })
        .catch((error)=>{
            dispatch(setError(error));
        })
}

export default fetchUsers
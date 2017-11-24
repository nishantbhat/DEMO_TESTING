import getTenprintsFromApi from '../api/tenprints'
import { setTenprints, setError } from '../actions'

const fetchTenprints = () => (dispatch,getState) => {
    getTenprintsFromApi()
        .then((data)=>{
           
            dispatch(setTenprints(data));

        })
        .catch((error)=>{
            dispatch(setError(error));
        })
}

export default fetchTenprints
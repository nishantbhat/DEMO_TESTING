import Constants from '../constant'

const getTenprintsFromApi = () => {
    return new Promise((resolve,reject) => {
        fetch(`${Constants.Stub}/tenprints.json`)
            .then((data) => {
                return data.json();
            })
            .then((tenprints)=>{
                resolve(tenprints);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export default getTenprintsFromApi
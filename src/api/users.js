import Constants from '../constant'

const getUsersFromApi = () => {
    return new Promise((resolve,reject) => {
        fetch(`${Constants.Stub}/users.json`)
            .then((data) => {
                console.log(data)
                return data.json();
            })
            .then((users)=>{
                console.log('api2')
                resolve(users);
            })
            .catch((error) => {
                console.log('api3')
                reject(error);
            })
    })
}

export default getUsersFromApi
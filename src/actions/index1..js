
// const ACTIONS = require('./types');
import * as accountListActions from './login'
import * as UserListActions from './index'


  describe('handleLogin', () => {
    it('should CHECK LOGIN', () => {
      const userdata = {
          usr:"manas",
          pwd:"manas"
      }
      const expectedAction = {
        
        type:accountListActions.HANDLE_LOGIN,
        userdata
      }
      expect(accountListActions.handleLogin(userdata)).toEqual(expectedAction)
    })
  })
  describe('setTenprints', () => {
    it('should CHECK settenprints', () => {
      const data = {
        
            "tid": "000001",
            "oid": "GWS0001",
            "priority": 4,
            "sd":"05/04/2017 11:55 PM",
            "ed": "05/04/2017 11:55 PM",
            "status": "Done",
            "process": "E4FGD465656ED"
        
      }
      const expectedAction = {
        
        type:UserListActions.SET_TENPRINTS,
        tenprints:data
      }
      expect(UserListActions.setTenprints(data)).toEqual(expectedAction)
    })
  })

  describe('getUsers', () => {
    it('should CHECK getUsers', () => {
      const data = {
        
        
            "FirstName": "Ibrahim",
            "LastName": "wasim",
            "DateAdded": "05/04/2017 11:55 PM",
            "User ID":"0002",
            "LastActive": "05/04/2017 11:55 PM",
            "status": "Active"
        
        
      }
      const expectedAction = {
        
        type:UserListActions.GET_USERS,
        users:data
      }
      expect(UserListActions.getUsers(data)).toEqual(expectedAction)
    })
  })

  describe('getUsers', () => {
    it('should CHECK getUsers with String Data', () => {
      const data = {
        
        
      }
      const expectedAction = {
        
        type:UserListActions.GET_USERS,
        users:"myString"
      }
      expect(UserListActions.getUsers(data)).toEqual(expectedAction)
    })
  })
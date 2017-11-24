// // checkLogin

// // const sum = require('./login');
// import * as sum from './login'
// test('Login with hardcoded data', () => {
//     let auth={
//         'email':"admin",
//         'password':"admin"
//     }
// expect(sum(auth)).toBe(true);
// });
// //
const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn(),
    };
    const next = jest.fn()
  
    const invoke = (action) => thunk(store)(next)(action)
  
    return {store, next, invoke}
  };
  it(`passes through non-function action`, () => {
    const { next, invoke } = create()
    const action = {type: 'TEST'}
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })
  
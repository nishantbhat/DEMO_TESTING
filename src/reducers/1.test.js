





import reducer from './tenprints'
import * as types from '../actions/types'

//   describe('todos reducer', () => {
//     it('should return the initial state', () => {
//       expect(reducer(undefined, {})).toEqual([
//         {
//             tenprints: [ {
//                 "tid": "000001",
//                 "oid": "GWS0001",
//                 "priority": 4,
//                 "sd":"05/04/2017 11:55 PM",
//                 "ed": "05/04/2017 11:55 PM",
//                 "status": "Done",
//                 "process": "E4FGD465656ED"
//             }]
//         }
//       ])
//     })

// })
var data = [{
    "tid": "000001",
    "oid": "GWS0001",
    "priority": 4,
    "sd": "05/04/2017 11:55 PM",
    "ed": "05/04/2017 11:55 PM",
    "status": "Done",
    "process": "E4FGD465656ED"
}]
describe('todos reducer', () => {
    it('should handle initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([])
    })
    it('should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: types.SET_TENPRINTS,
                tenprints: data
            })
        ).toEqual([
            {
               
                    "tid": "000001",
                    "oid": "GWS0001",
                    "priority": 4,
                    "sd": "05/04/2017 11:55 PM",
                    "ed": "05/04/2017 11:55 PM",
                    "status": "Done",
                    "process": "E4FGD465656ED"
                   
            }
        ])
    })
})
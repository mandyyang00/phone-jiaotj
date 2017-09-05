import { combineReducers } from 'redux'
import xianchangId from './xianchangidReducer'
import class0 from './classReducer'


const rootReducer = combineReducers({
 	xianchangId,
 	class0
})

export default rootReducer
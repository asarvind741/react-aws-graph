import { combineReducers } from 'redux';
import UserReducer from './user-reducer'

const rootReducer = combineReducers({
    
    currentUser: UserReducer
})

export default rootReducer;
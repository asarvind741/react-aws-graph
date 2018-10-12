import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import NotificationReducer from './notify-reducer';


const rootReducer = combineReducers({
    
    currentUser: UserReducer,
    notification: NotificationReducer
})

export default rootReducer;
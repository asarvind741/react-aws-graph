import { SAVE_CURRENT_USER } from '../actions/index';

export default function(state = {}, action){
    console.log("asssssssss", action.payload)
    switch(action.type){
        case SAVE_CURRENT_USER:
        return [action.payload]

        default:
       return state;
    }
}
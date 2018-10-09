import { SAVE_CURRENT_USER } from '../actions/index';

export default function(state = {}, action){
    switch(action.type){
        case SAVE_CURRENT_USER:
        return [action.payload]

        default:
       return state;
    }
}
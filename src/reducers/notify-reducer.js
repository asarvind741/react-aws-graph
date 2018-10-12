import { SUCCESS_MESSAGE, WARN_MESSAGE, INFO_MESSAGE, ERROR_MESSAGE} from '../actions/types';
import { toast } from "react-toastify";


export default function(state = {}, action){

    switch(action.type){
        case SUCCESS_MESSAGE:
        toast.success(action.payload);
        return state;

        default:
        return state;
    }

}
import { SAVE_CURRENT_USER, SUCCESS_MESSAGE} from './types';

export function saveCurrentUser(user){
    return {
        type: SAVE_CURRENT_USER,
        payload: user
    }
}

export function displayNotificationMessage(data){
    return {
        type: SUCCESS_MESSAGE,
        payload: data
    }
}
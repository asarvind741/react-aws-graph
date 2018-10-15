import { 
    SAVE_CURRENT_USER, 
    SUCCESS_MESSAGE,
    ERROR_MESSAGE,
    WARN_MESSAGE,
    INFO_MESSAGE
 } from './types';

export function saveCurrentUser(user){
    return {
        type: SAVE_CURRENT_USER,
        payload: user
    }
}

export function successMessage(data){
    return {
        type: SUCCESS_MESSAGE,
        payload: data
    }
}

export function errorMessage(data){
    return {
        type: ERROR_MESSAGE,
        payload: data
    }
}

export function warningMessage(data){
    return {
        type: WARN_MESSAGE,
        payload: data
    }
}

export function infoMessage(data){
    return {
        type: INFO_MESSAGE,
        payload: data
    }
}
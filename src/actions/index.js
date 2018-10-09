
export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER'
export function saveCurrentUser(user){
    return {
        type: SAVE_CURRENT_USER,
        payload: user
    }
}
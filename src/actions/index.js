
export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER'
export function saveCurrentUser(user){
    console.log("user", user)
    return {
        type: SAVE_CURRENT_USER,
        payload: user
    }
}
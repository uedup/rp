/**
 * reducer
 */
export interface actionType {
    type:string
}
export type stateType = {
    isHeart:boolean
}
const initState = {
    isHeart:false
}
const rootReducer = (state:stateType = initState, action: actionType) => {
    console.log('reducer', state, action)
    switch (action.type) {
        case 'stopSend':
            return {
                isHeart:false
            }
            break;
        case 'sendLove':
            return {
                isHeart:true
            }
            break;

        default:
            return initState
            break;
    }
}

export default rootReducer;  
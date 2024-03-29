/**
 * reducer
 */
export interface actionType {
    type:string
}
export type stateType = {
    value: number,
    info: string
}
const initState = {
    value: 8,
    info: '默认值'
}
const rootReducer = (state:stateType = initState, action: actionType) => {
    // console.log('reducer', state, action)
    switch (action.type) {
        case 'add_action':
            return {
                value:state.value+1,
                info: '添加'
            }
            break;
        case 'minus_action':
            return {
                value:state.value>1?state.value-1:0,
                info: '减少'
            }
            break;

        default:
            return initState
            break;
    }
}

export default rootReducer;  
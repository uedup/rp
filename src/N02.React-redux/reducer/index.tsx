/**
 * reducer
 */
import { actionType } from '../action'
const initState = {
    value: 10,
    info: '默认值'
}
const rootReducer = (state = initState, action: actionType) => {
    // console.log('reducer', state, action)
    switch (action.type) {
        case 'add_action':
            return {
                value:state.value+1,
                info: '改变'
            }
            break;
        case 'minus_action':
            return {
                value:state.value>1?state.value-1:0,
                info: '改变'
            }
            break;

        default:
            return initState
            break;
    }
}

export default rootReducer;  
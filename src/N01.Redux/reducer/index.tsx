/**
 * reducer
 */
import { actionType } from '../action'
const initState = {
    value: 0,
    info: '默认值'
}
const rootReducer = (state = initState, action: actionType) => {
    console.log('reducer', state, action)
    switch (action.type) {
        case 'send_type':
            return Object.assign({}, state, action)
            break;

        default:
            return initState
            break;
    }
}

export default rootReducer;  
/**
 * action
 */
export interface actionType {
    type:string
    info:string
}
const sendAction = ():actionType => {
    return {
        type: 'send_type',
        info: '我是一个action'
    }
}

export default sendAction 
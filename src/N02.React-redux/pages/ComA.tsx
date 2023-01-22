import { connect } from 'react-redux'

type ComAProps = {
    sendAction:Function
};
const ComA = (props:ComAProps) => {
    const handleClick = () => {
        // console.log(props)
        // 发送 action
        props.sendAction()
    }
    return (<>
        <button onClick={handleClick}>+</button>
    </>)
}
/**
 * 
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Function) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'add_action'
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ComA)
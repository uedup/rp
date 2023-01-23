import { connect } from 'react-redux'

type ComAProps = {
    removeFromCart:Function
};
const ComC = (props:ComAProps) => {
    const handleClick = () => {
        // console.log(props)
        // 发送 action
        props.removeFromCart()
    }
    return (<>
        <button onClick={handleClick}>-</button>
    </>)
}
/**
 * 
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Function) => {
    return {
        removeFromCart: () => {
            dispatch({
                type: 'minus_action'
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ComC)
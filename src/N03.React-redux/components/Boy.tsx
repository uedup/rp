import { useState } from 'react';
import { connect } from 'react-redux'
import { stateType } from '../reducer'
import imgBoy from './img/boy.jpeg'
import imgHeart from './img/heart.gif'
type BoyProps = {
    stopSend: Function,
    sendLove: Function,
    isHeart: boolean
};

const Boy = (props: BoyProps) => {
    const [isHeart, setHeart] = useState(false)
    const handleClick = () => {
        isHeart ? props.stopSend() : props.sendLove()
        setHeart(!isHeart)
    }
    return (<center>
        <div>
            <img src={isHeart ? imgHeart : imgBoy} alt="" height='300'/>
        </div>
        <button onClick={handleClick}>{props.isHeart ? '收回爱心':'发射爱心' }</button>
    </center>)
}
/**
 * 
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Function) => {
    return {
        sendLove: () => {
            dispatch({
                type: 'sendLove'
            })
        },
        stopSend: () => {
            dispatch({
                type: 'stopSend'
            })
        }
    }
}

const mapStateToProps = (state: stateType) => {
    // console.log('Girl', state);
    return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(Boy)
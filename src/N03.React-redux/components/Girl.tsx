import { connect } from 'react-redux'
import { stateType } from '../reducer'
import imgGirl_happy from './img/girl_happy.jpeg'
import imgGirl_tear from './img/girl_tear.jpeg'
// store.
const Girl = (props: stateType) => {
    // console.log('Girl', props);
    return (<center>
        <img src={props.isHeart ? imgGirl_happy : imgGirl_tear} alt="" width='300' />
    </center>)
}

const mapStateToProps = (state: stateType) => {
    // console.log('Girl', state);
    return state;
}

export default connect(mapStateToProps)(Girl)
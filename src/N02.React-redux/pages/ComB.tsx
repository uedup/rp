import { connect } from 'react-redux'
import {stateType} from '../reducer'

// store.
const ComB = (props:stateType) => {
    console.log('ComB', props);
    return (<>
        数量：<span>{props.value}</span>
    </>)
}

const mapStateToProps = (state: stateType) => {
    console.log('ComB', state);
    return state;
}

export default connect(mapStateToProps)(ComB)
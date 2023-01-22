import { connect } from 'react-redux'
// store.
const ComB = (props:any) => {
    console.log('ComB', props);
    return (<>
        数量：<span>{props.value}</span>
    </>)
}

const mapStateToProps = (state: any) => {
    console.log('ComB', state);
    return state;
}

export default connect(mapStateToProps)(ComB)
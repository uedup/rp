import * as React from 'react';
// import ReactDOM from 'react-dom/client';
import Count from './Count'

interface Props {

}

interface State {
    visible?: boolean
}

class Demo extends React.Component<Props, State> {
    constructor(props: Props) {
        console.log('Demo-constructor')
        super(props);
        this.state = {
            visible: true
        };

    }
    UNSAFE_componentWillMount(): void {
        console.log('Demo-componentWillMount')
    }
    componentDidMount(): void {
        console.log('Demo-componentDidMount')
    }
    componentWillUnmount(): void {
        console.log('Demo-componentWillUnmount')
    }
    UNSAFE_componentWillReceiveProps(): void {
        console.log('Demo-componentWillReceiveProps')
    }
    shouldComponentUpdate(): boolean {
        console.log('Demo-shouldComponentUpdate')
        return true;
    }
    UNSAFE_componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
        console.log('Demo-componentWillUpdate')
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('Demo-componentDidUpdate')
    }
    handleClick = () => {
        // ReactDOM.createRoot(document.querySelector('#root') as Element).unmount();
        this.setState({
            visible: !this.state.visible
        });
    }
    handleRefresh = () => {
        // ReactDOM.createRoot(document.querySelector('#root') as Element).unmount();
        this.forceUpdate()
    }
    render() {
        console.log('Demo-render')
        return (<div>
            <h3>Count组件</h3>
            <div>{this.state.visible?<Count/>:''}</div>
            <button onClick={this.handleClick}>{this.state.visible?'隐藏组件':'显示组件'}</button>
            <button onClick={this.handleRefresh}>强制刷新父组件</button>
        </div>);
    }
}

export default Demo;
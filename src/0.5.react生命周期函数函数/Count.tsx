import * as React from 'react';

interface Props {

}

interface State {
    count: number
}

class Count extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        console.log('count-constructor')
        super(props);
        this.state = {
            count: 0
        };

    }
    UNSAFE_componentWillMount(): void {
        console.log('count-componentWillMount')
    }
    componentDidMount(): void {
        console.log('count-componentDidMount')
    }
    componentWillUnmount(): void {
        console.log('count-componentWillUnmount')
    }
    UNSAFE_componentWillReceiveProps(): void {
        console.log('count-componentWillReceiveProps')
    }
    UNSAFE_shouldComponentUpdate(): boolean {
        console.log('count-shouldComponentUpdate')
        return true;
    }
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
        console.log('count-componentWillUpdate')
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('count-componentDidUpdate')
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleRefresh = () => {
        this.forceUpdate()
    }
    render() {
        console.log('count-render')
        return (<div>
            <span>Count组件:</span>
            <b>数量{this.state.count}</b>
            <button onClick={this.handleClick}>+++</button>
            <button onClick={this.handleRefresh}>强制刷新子组件</button>
        </div>);
    }
}

export default Count;
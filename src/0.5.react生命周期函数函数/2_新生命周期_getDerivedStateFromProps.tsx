import * as React from 'react';
// import ReactDOM from 'react-dom/client';

interface Props {

}

interface State {
    count: number
}

class Demo extends React.Component<Props, State> {
    constructor(props: Props) {
        console.log('Demo-constructor')
        super(props);
        this.state = {
            count: 0
        };

    }
    componentDidMount(): void {
        console.log('Demo-componentDidMount')
    }
    componentWillUnmount(): void {
        console.log('Demo-componentWillUnmount')
    }
    shouldComponentUpdate(): boolean {
        console.log('Demo-shouldComponentUpdate')
        return true;
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('Demo-componentDidUpdate')
    }
    static getDerivedStateFromProps = (props: Readonly<Props>, state: Readonly<State>) => {
        console.log('getDerivedStateFromProps', props, state)
        // return null;
        return {
            count: 109
        }
    }
    handleClick = () => {
        let c = this.state?.count;
        this.setState({
            count: c + 1
        })
    }
    handleRefresh = () => {
        // ReactDOM.createRoot(document.querySelector('#root') as Element).unmount();
        this.forceUpdate()
    }
    render() {
        console.log('Demo-render')
        return (<div>
            <h3>数量：{this.state.count}</h3>
            <button onClick={this.handleClick}>增加数量</button>
            <button onClick={this.handleRefresh}>强制刷新父组件</button>
        </div>);
    }
}

export default Demo;
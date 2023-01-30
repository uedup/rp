import { Component } from 'react';
import Img from './a.png';

interface Props {

}
interface State {
    name: string,
    count: number
}

class Demo extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "tom",
            count: 0
        };
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }
    input1?: HTMLInputElement | null = null
    handleClick() {
        this.setState({
            name: (this.input1 as HTMLInputElement).value,
            count: this.state.count + 1
        })
    }
    render() {
        return (<div>
            <p>ref的内联回调，在组件更新时会触发两次</p>
            <p><img alt="图片提示" src={Img} /></p>
            <p>我是{this.state.name}：{this.state.count}</p>
            <input
                // 回调ref,a为当前dom
                // 内联函数在组件更新时会重新生成、然后再绑定
                ref={a => { console.log('ref:内联绑定'); this.input1 = a }}
                type="text" />
            <button onClick={this.handleClick}>更新组件</button>
        </div>);
    }
}

export default Demo;
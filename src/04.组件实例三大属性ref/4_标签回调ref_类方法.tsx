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
    }
    input1?: HTMLInputElement | null = null
    handleClick = () => {
        this.setState({
            name: (this.input1 as HTMLInputElement).value,
            count: this.state.count + 1
        })
        console.log('ref:class绑定函数')
    }
    saveInput = (a:HTMLInputElement) => {
        // 实例方法已存在，不会再次生成
        console.log('class绑定函数')
        this.input1 = a
    }
    render() {
        // console.log('render1');
        return (<div>
            <p>ref的内联回调，在组件更新时会触发两次</p>
            <p><img alt="图片提示" src={Img} /></p>
            <p>我是{this.state.name}：{this.state.count}</p>
            <input
                // 使用class的绑定函数解决行内联函数多次执行的问题
                ref={this.saveInput}
                type="text" />
            <button onClick={this.handleClick}>更新组件</button>
        </div>);
    }
}

export default Demo;
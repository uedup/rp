import { Component } from 'react'

interface IProps {

}

interface IState {
    name: string
    age: number
}

class NavBar extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: 'Tom',
            age: 12
        };
    }
    handleClick = () => {
        // this.setState接受新状态
        this.setState({
            name: 'Jerry',
            age: 7
        })
        // 无法得到最新的state
        console.log(this.state.name, this.state.age)
    }
    handleClick1 = () => {
        // this.setState接受函数，函数返回新状态
        this.setState((obj) => {
            return {
                name: 'Hello',
                age: 8
            }
        })
        // 无法得到最新的state
        console.log(this.state.name, this.state.age)
    }
    handleClick2 = () => {
        // this.setState的第二个参数接受函数，可以得到最新的state
        this.setState((obj) => {
            return {
                name: 'New Name',
                age: 8
            }
        }, () => {
            console.log(this.state.name, this.state.age)
        })

    }
    render() {
        return (<div>
            {this.state.name}:{this.state.age}
            <div><button onClick={this.handleClick}>setState接受对象</button></div>
            <div><button onClick={this.handleClick1}>setState接受函数</button></div>
            <div><button onClick={this.handleClick2}>setState接受函数，并有返回值得到最新的state</button></div>
        </div>);
    }
}

export default NavBar;
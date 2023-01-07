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
    render() {
        return (<div>
            {this.state.name}:{this.state.age}
        </div>);
    }
}

export default NavBar;
import { Component, ReactNode } from 'react'

interface IProps {
    name: string,
    children: ReactNode
}

interface IState {
}

class NavBar extends Component<IProps, IState> {
    render() {
        console.log('我是普通component')
        return (<div>
            {this.props.name}
            <div>{this.props.children}</div>
        </div>);
    }
}

export default NavBar;
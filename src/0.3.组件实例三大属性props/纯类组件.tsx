import { PureComponent, ReactNode } from 'react'

interface IProps {
    name: string,
    children: ReactNode
}

interface IState {
}

class NavBar extends PureComponent<IProps, IState> {
    render() {
        console.log('我是Purecomponent')
        return (<div>
            {this.props.name}
            <div>{this.props.children}</div>
        </div>);
    }
}

export default NavBar;
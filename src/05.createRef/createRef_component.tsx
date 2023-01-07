import React, { createRef } from 'react'
import Child from './Child'
interface IProps {

}

interface IState {

}

class Demo extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {

        };
    }
    // myref:any = createRef<HTMLInputElement>()
    myref:any = createRef<React.ReactElement>()
    showData = () => {
        console.log(this.myref.current?.value)
    }
    render() {
        return (<div>
            <Child ref={this.myref} />
            <button onClick={this.showData}>按钮</button>
        </div>);
    }
}

export default Demo;
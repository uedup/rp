import React, { createRef } from 'react'

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
    myref = createRef<HTMLInputElement>()
    showData = () => { 
        console.log(this.myref.current?.value)
     }
    render() { 
        return ( <div>
            <input type="text" ref={this.myref} placeholder="点击按钮提示数据"/> 
            <button onClick={this.showData}>按钮</button>
        </div> );
    }
}
 
export default Demo;
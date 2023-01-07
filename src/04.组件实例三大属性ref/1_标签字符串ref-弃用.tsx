import { Component } from 'react';

interface IProps {
    
}
 
interface IState {
    
}
 
class  Demo extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            
        };
    }
    handleClick = ()=>{
        // this.refs ts会给弃用提示
        console.log(this.refs.ref1,(this.refs.ref1 as HTMLInputElement)?.value);
    }
    render() { 
        return (<div>
            <input ref="ref1" type="text" />
            <button onClick={this.handleClick}>按钮</button>
            <input ref="ref2" type="text" />
        </div>);
    }
}
 
export default Demo;
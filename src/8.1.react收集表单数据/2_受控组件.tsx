import * as React from 'react';

interface Props {

}
 
interface State {
    username:string,
    password:string
}
 
class Demo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };

    }
    saveUsername =  (event:React.ChangeEvent<HTMLInputElement>) => { 
        this.setState({
            username:event.target?.value
            // susername:'tom'
        })
    }
    savePassword =  (event:React.ChangeEvent<HTMLInputElement>) => { 
        this.setState({
            password:event.target?.value
            // susername:'tom'
        })
    }
    handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
        // e.stopPropagation();//阻止事件传递
        e.preventDefault();
        console.log(this.state.username,this.state.password)
     }

    render() { 
        
        return (<div>
            <h3>不使用ref,使用onchange等事件，收集数据至state，为受控组件。</h3>
            <form 
            onSubmit={this.handleSubmit} 
            action="http://www.jd.com">
                <label htmlFor="">用户名：
                    <input onChange={this.saveUsername} type="text" name="username"/>
                </label>
                <br />
                <label htmlFor="">  密&emsp;码：
                    <input onChange={this.savePassword} type="password" name="password"/>
                </label>
                <br />
                <button>登陆</button>
            </form>
        </div>);
    }
}
 
export default Demo;
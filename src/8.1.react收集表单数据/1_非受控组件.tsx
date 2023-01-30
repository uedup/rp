import * as React from 'react';

interface Props {

}
 
interface State {
    
}
 
class Demo extends React.Component<Props, State> {
    // constructor(props: Props) {
    //     super(props);
    // }
    urn?:HTMLInputElement|null = null
    pwd?:HTMLInputElement|null = null
     handleSubmitRef = (e:React.FormEvent<HTMLFormElement>) => { 
        // e.stopPropagation();//阻止事件传递
        e.preventDefault();
        // const {username, password} = this;
        console.log(this.urn?.value, this?.pwd?.value)
     }
    render() { 
        console.log('render')
        return (<div>
            <form 
            // onSubmit={this.handleSubmit} 
            onSubmit={this.handleSubmitRef} 
            action="http://www.jd.com">
                <label htmlFor="">用户名：
                    <input ref={(e) => { this.urn =e }} type="text" name="username"/>
                </label>
                <br />
                <label htmlFor="">  密&emsp;码：
                    <input ref={(e) => { this.pwd =e }} type="text" name="password"/>
                </label>
                <br />
                <button>登陆</button>
            </form>
        </div>);
    }
}
 
export default Demo;
import * as React from 'react';
import { useState, useEffect } from 'react';
type IProps = {
    count: number
}
function Demo(props: IProps) {
    let [count, setCount] = useState(0)
    useEffect(() => { 
        console.log('componentDidMount')

     },[])
    const handleAdd = () => { 
        setCount(count++)
     }
    return (<div>
        <p>props属性{props.count}</p>
        <p>数量{count}</p>
        <button className="header" onClick={handleAdd}>按钮</button>
    </div>);
}

export default Demo;
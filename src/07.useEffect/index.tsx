import * as React from 'react';
import { useState, useEffect } from 'react';
type IProps = {
}
function Demo(props: IProps) {
    let [count, setCount] = useState(0)
    useEffect(() => {
        console.log('componentDidMount')

    }, [])
    //传对象，作为新的state
    const handleAdd = () => {
        setCount(count++)
    }
    //传函数，返回新的state
    const handleMultiple = () => {
        setCount((c) => {
            return c*c ;
        })
    }
    return (<div>
        {/* <p>props属性{props.count}</p> */}
        <p>数量{count}</p>
        <button className="header" onClick={handleAdd}>按钮+</button>
        <button className="header" onClick={handleMultiple}>按钮*</button>
    </div>);
}

export default Demo;
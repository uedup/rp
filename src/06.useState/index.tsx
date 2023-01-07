import * as React from 'react';
import { useState, useEffect } from 'react';
type IProps = {
}
function Demo(props: IProps) {
    let [count, setCount] = useState(10)
    let [num, setNum] = useState(20)
    useEffect(() => {
        console.log('render')
    })
    useEffect(() => {
        console.log('componentDidMount')
    }, [])
    useEffect(() => {
        console.log('componentDidUpDate Num')
    }, [num])
    useEffect(() => {
        return () => { 
            console.log('componentUnMount')
         }
    }, [num])

    //传对象，作为新的state
    const handleAdd = () => {
        setCount(count++)
    }
    //传函数，返回新的state
    const handleMultiple = () => {
        setCount((c) => {
            return c * c;
        })
    }
    const handleAddNum = () => {
        setNum(num++)
    }
    return (<div>
        {/* <p>props属性{props.count}</p> */}
        <div>
            <p>count数量{count}</p>
            <button className="header" onClick={handleAdd}>按钮+</button>
            <button className="header" onClick={handleMultiple}>按钮*</button>
        </div>
        <div>
        <p>num数量{num}</p>
            <button className="header" onClick={handleAddNum}>按钮+</button>
        </div>
    </div>);
}

export default Demo;
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
        setCount(count + 1)
    }
    //传函数，返回新的state
    const handleMultiple = () => {
        setCount((c) => {
            return c * c;
        })
    }
    const handleAddNum = () => {
        // num++
        // setNum(num)
        setNum(num++)
        console.log(num)
    }

    const [number, setNumber] = React.useState(0)
    const handleClick = () => setInterval(() => {
        // 此时 number 一直都是 0
        setNumber(number + 1)
    }, 1000)

    const [number2, setNumber2] = React.useState(0)
    const handleClick2 = () => setInterval(() => {
        // 此时 number 一直都是 0
        // setNumber(number + 1)
        setNumber2((number) => (number + 1))
    }, 1000)

    const [state, dispatchState] = useState({ name: 'alien' })
    const handleClick3 = () => { // 点击按钮，视图没有更新。
        state.name = 'Tom'
        dispatchState(state) // 直接改变 `state`，在内存中指向的地址相同。
    }

    return (<>
        <p>const [ ①state , ②dispatch ] = useState(③initData)</p>
        <div>
            <p>count数量{count}</p>
            <button className="header" onClick={handleAdd}>按钮+ （参数：count + 1）</button>
            <button className="header" onClick={handleMultiple}>按钮*</button>
        </div>
        <div>
            <p>num数量{num}</p>
            <button className="header" onClick={handleAddNum}>按钮（参数：count ++）点击时会失效</button>
        </div>
        <div>
            <p>在函数组件一次执行上下文中，①state 的值是固定不变的。</p>
            <button onClick={handleClick} > 点击 {number}</button>
        </div>
        <div>
            <p>②dispatch 参数 可以是要直接返回的state；也可以是函数，返回值为新state</p>
            <button onClick={handleClick2} > 点击 {number2}</button>
        </div>
        <div>
            <div> {state.name}</div>
            <button onClick={handleClick3}  >changeName</button>
            <p></p>
        </div>
    </>);
}

export default Demo;
import React, { useReducer } from "react";
import MyChildren from './Child'

type AppProps = {};
type ActionType = {
  payload: number
  name: string
};

const DemoUseReducer = () => {
  /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
  const [number, dispatchNumbner] = useReducer((state: number, action: ActionType) => {
    const { payload, name } = action
    /* return的值为新的state */
    switch (name) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      case 'reset':
        return payload
    }
    return state
  }, 0)
  return <div>
    当前值：{number}
    { /* 派发更新 */}
    <button onClick={() => dispatchNumbner({ name: 'add', payload: 666  })} >增加</button>
    <button onClick={() => dispatchNumbner({ name: 'sub', payload: 666  })} >减少</button>
    <button onClick={() => dispatchNumbner({ name: 'reset', payload: 666 })} >赋值</button>
    { /* 把dispatch 和 state 传递给子组件  */}
    <MyChildren  dispatch={ dispatchNumbner } State={{ number }} />
  </div>
}
export default DemoUseReducer;

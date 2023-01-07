import { useState } from 'react';

import NavBarPure from './纯类组件'
import NavBar from './类组件'

export default function Demo() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('tom')
  const handleClick = () => {
    setCount(count+1)
  }
  const handleClick2 = () => {
    setName('Jerry')
  }
  return (
    <div>
      <div>count:{count}</div>
      <div><button onClick={handleClick}>修改count</button></div>
      <div><button onClick={handleClick2}>修改name</button></div>
      <NavBar name={name}>child内容</NavBar>
      <hr />
      <NavBarPure name={name}>child内容</NavBarPure>
    </div>
  )
}

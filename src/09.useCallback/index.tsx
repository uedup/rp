import { useState, memo, useCallback,useMemo } from "react"

type AppProps = {
}
type IProps = {
  sum: Function
}
const Child = (props: IProps) => {
  console.log('child render')
  return (
    <div>{props.sum()}</div>
  )
}

const PureChild = memo(Child)

const App: React.FC<AppProps> = () => {
  const [count, setCount] = useState(1)
  const [a, setA] = useState(5)
  const [b, setB] = useState(10)
  // sum是引用型，每次都不一样
  const sum = () => {
    console.log('count:', count)
    console.log(a + b + count)
    return a + b + count
  }
  //useCallback 和useMemo写法相似，但他直接将第一个参数fn函数返回；
  //使用useMemo返回值为函数，其作用和useCallback一样
  const result = useCallback(() => {
    console.log('count:', count)
    console.log(a + b + count)
    return a + b + count
  }, [a, b])
  const result2 = useMemo(() => {
    return () => {
      console.log('count:', count)
      console.log(a + b + count)
      return a + b + count
    }
  }, [a, b])

  const addCount = () => { setCount(count + 1) }
  const addACount = () => { setA(a + 1) }
  const addBCount = () => { setB(b + 1) }

  return (
    <div>
      <button onClick={addCount}>点击增加计数器：{count}</button>
      <button onClick={addACount}>A：{a}</button>
      <button onClick={addBCount}>B：{b}</button>
      <PureChild sum={result2} />
      <PureChild sum={result} />
      <PureChild sum={sum} />
    </div>
  )
}

export default App
import { ReactNode, useState, memo} from "react"

type AppProps = {
  message: string
  children: ReactNode
}

const Child = () => { 
  console.log('child render')
  return (
    <div>child...</div>
  )
 }

const PureChild = memo(Child)

const App: React.FC<AppProps> = ({ message, children }) => {
  const [count,setCount] = useState(1)
  const addCount=() => { setCount(count+1) }

  return (
    <div>
      <button onClick={addCount}>点击增加计数器：{count}</button>
      {/* <Child /> */}
      <PureChild />
      <p>{message}</p>
      <b>{children}</b>
    </div>
  )
}

export default  App
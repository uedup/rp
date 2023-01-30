import { useState, useEffect, useMemo } from "react"

type AppProps = {
}

const App: React.FC<AppProps> = () => {
  const [count, setCount] = useState(1)
  const [num, setNum] = useState('100')
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }, [count])

  const dirtyWork = () => {
    console.log('正在进行大量运算')
    return num + '大量运算'
  }

  //第一个参数是函数，其返回值会被缓存
  const dirtyWork2 = useMemo(() => {
    console.log('正在进行大量运算')
    return num + '大量运算'
  }, [num])


  return (
    <div>
      <p>count:{count}</p>
      <input type="text" value={num} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNum(e.target?.value) }} />
      <p>{dirtyWork2}</p>
      {/* <p>{dirtyWork()}</p> */}
    </div>
  )
}

export default App
import React, { Component, useRef, createRef, forwardRef } from "react"
type Iprops = {

}
const ChildFn = (props: Iprops, inputRef: React.RefObject<HTMLInputElement>) => {
  return (<div>
    <input type="text" ref={inputRef} />
    <input type="text" />
    函数子组件
  </div>)
}


class ChildClass extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        类子组件
      </div>
    )
  }
}

// const NewChildFn = forwardRef(ChildFn)
const NewChildFn = forwardRef<HTMLInputElement, Iprops>((props, inputRef) => {
  const handleFocus1 = () => {
    if (inputRef != null && typeof inputRef !== 'function') {
      (inputRef.current as HTMLInputElement).focus()
    }
  }
  return (<div>
    <input type="text"/>
    <input type="text" ref={inputRef} />
    <button onClick={handleFocus1}>子组件按钮</button>
    函数子组件
  </div>)
}) 

type AppProps = {
}
const App: React.FC<AppProps> = () => {
  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = createRef<HTMLInputElement>()
  const handleFocus1 = () => {
    inputRef1.current?.focus()
  }
  const handleFocus2 = () => {
    inputRef2.current?.focus()
  }
  return (
    <div>
      {/* <ChildFn ref={inputRef2} />
      <ChildClass ref={inputRef2} /> */}
      <NewChildFn ref={inputRef1} />
      <button onClick={handleFocus1}>useRef</button>
      <hr />
      {/* <input type="text" ref={inputRef2} /> */}
      <NewChildFn ref={inputRef2} />
      <button onClick={handleFocus2}>creatRef</button>
    </div>)
}
export default App
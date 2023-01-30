import { useRef, createRef } from "react"

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
      <input type="text" ref={inputRef1}/><button onClick={handleFocus1}>useRef</button>
      <hr />
      <input type="text" ref={inputRef2}/><button onClick={handleFocus2}>creatRef</button>
    </div>)
}
export default App
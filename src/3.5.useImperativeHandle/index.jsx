import { useRef, useState } from "react";
import Study from "./Study";
import Register from "./Register";

function App() {
  const [open, setOpen] = useState(false);

  const registerRef = useRef();
  const focusUsename = () => {
    registerRef.current.usernameRef.current.focus();
  };
  const focusPassword = () => {
    registerRef.current.passwordRef.current.focus();
  };
  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>打开弹窗</button>
      <Study open={open} onClose={() => {setOpen(false);console.log('close')}} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={focusUsename}>聚焦用户名</button>
      <button onClick={focusPassword}>聚焦密码</button>
      <Register ref={registerRef} />
    </div>
  );
}

export default App;

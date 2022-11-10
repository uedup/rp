import React, { useState, useEffect } from 'react';

function App() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新
  return (
    <div>
      <h3>You have clicked {count} times</h3>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;

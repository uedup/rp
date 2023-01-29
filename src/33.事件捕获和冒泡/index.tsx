import React from "react";

export default function Demo() {
  const handleClick = (msg: string) => {
    console.log(msg)
  }
  return (<>
    <div
      onClick={() => handleClick("div-冒泡")}
      onClickCapture={() => handleClick("div-捕获")}
    >
      <button
        onClick={() => handleClick("btn-冒泡")}
        onClickCapture={() => handleClick("btn-捕获")}
      >
        点我
      </button>
    </div>
  </>);
}

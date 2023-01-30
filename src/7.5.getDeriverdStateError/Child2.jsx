import React, {useState } from "react";

const Child2 = (props) => {
  const [state] = useState({
    book: [
      {
        id: "003",
        title: "移动H5开发",
      },
      {
        id: "004",
        title: "TypeScript语音",
      },
    ],
  })
  return (
    <>
      <h4>Child2 Component</h4>
      <ul>
        {state.book.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  )
}

export default Child2 

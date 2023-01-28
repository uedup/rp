import React, {
  useState,
  useEffect,
} from "react";
import "./index.css";

export let open: (msg: string[]) => void;

type Iprops = {};
const Notice = (props:Iprops) => {
  const [msgList, setMsgList] = useState<string[]>(["abc", "efg"]);
  useEffect(() => {
    open = (msg: string[]) => { 
      setMsgList(() => [...msgList, ...msg]);
     };
  });

  const handleOpen = (msg: string[]) => {
    setMsgList(() => [...msgList, ...msg]);
  };
  return (
    <div id="notice-container">
      {msgList.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
      <button
        onClick={() => {
          handleOpen(["handleOpen"]);
        }}
      >
        handleOpen
      </button>
      <button
        onClick={() => {
          open(["open"]);
        }}
      >
        open
      </button>
    </div>
  );
};

export default Notice;

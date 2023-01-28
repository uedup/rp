import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./index.css";

type Iprops = {};
const Notice = forwardRef((props: Iprops, ref:any) => {
  const [msgList, setMsgList] = useState<string[]>(["abc", "efg"]);
  useImperativeHandle(
    ref,
    () => {
      return {
        open: (msg: string[]) => {
          setMsgList(() => [...msgList, ...msg]);
        },
      };
    },
    // msgList
  );
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
    </div>
  );
});

export default Notice;

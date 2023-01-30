import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 60vh;
  width: 70vw;
  padding: 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
`;
const PlaceHolder = styled.div`
  border: 0.7rem dashed hsl(192, 100%, 50%);
  padding: 0.7rem;
  margin: 0.2rem;
  &.highlight {
    background-color: rgba(255, 255, 255, 0.7);
    border: 0.7rem dashed hsl(32, 100%, 50%);
  }
`;
const ItemContainer = styled.div`
  border: 0.3rem dotted hsl(128, 100%, 50%);
  padding: 0.1rem;
  width: 7rem;
  height: 7rem;
  line-height: 7rem;
  text-align: center;
  &.current {
    border: 0.3rem dotted red;
  }
`;
const Card = styled.div`
  font-size: 4rem;
  background-color: hsl(168, 80%, 80%);
  color: hsl(30, 90%, 50%);
  font-weight: bold;

  &.current {
    background-color: hsl(168, 60%, 90%);
    color: white;
  }
`;
const FileWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
`;
const INIT_ITEMS = [
  "🐳",
  "🍄",
  "🧧",
  "🥝",
  "",
  "❄️",
  "🦔",
  "",
  "🥇",
  "",
  "🚀",
  "",
];
type AppProps = {};

export const Main: React.FC<AppProps> = () => {
  const refInput = useRef<any>();
  const [items, setItems] = useState(INIT_ITEMS);
  const [source, setSource] = useState<null | number>(null);
  const [target, setTarget] = useState<null | number>(null);

  const onDragStart = (id: number) => (e: React.DragEvent<HTMLDivElement>) => {
    // console.log("onDragStart", id);
    if (source !== id) setSource(id);
  };
  const onDragOver = (id: number) => (e: React.DragEvent<HTMLDivElement>) => {
    // console.log("onDragOver");
    e.preventDefault();
    if (target !== id) setTarget(id);
  };
  const onDragLeave = (id: number) => (e: React.DragEvent<HTMLDivElement>) => {
    // console.log("onDragLeave");
    // e.preventDefault();
    setTarget(null);
  };
  const onDrop = () => {
    // console.log('onDrop')
    setSource(null);
    setTarget(null); //setTarget为异步操作，不影响下面的“换位”操作。
    if (target !== null && source !== null) {
      let temp = items[target];
      items[target] = items[source]; //items为常数不能直接修改，但作为引用类型，数组内部元素可改，但组件不更新。
      items[source] = temp;
      setItems([...items]);
    }
  };
  const onDragEnd = () => {
    // console.log("onDragEnd");
    setSource(null);
    setTarget(null);
  };
  const onDropFile = (e: any) => {
    console.log(e);
    e.preventDefault();
    refInput.current.files = e.dataTransfer.files;
  };
  return (
    <>
      <FileWrapper>
        <input type="file" ref={refInput} />
      </FileWrapper>
      <Wrapper>
        {items.map((x: string, index: number) => (
          <PlaceHolder
            key={index}
            className={target === index && source !== index ? "highlight" : ""}
            onDragOver={onDragOver(index)}
            onDragLeave={onDragLeave(index)}
            onDrop={onDropFile}
          >
            <ItemContainer
              className={source === index ? "current" : ""}
              draggable={!!x}
              onDragStart={onDragStart(index)}
              onDragEnd={onDragEnd}
              onDrop={onDrop}
            >
              <Card>{x}</Card>
            </ItemContainer>
          </PlaceHolder>
        ))}
      </Wrapper>
    </>
  );
};
export default Main;

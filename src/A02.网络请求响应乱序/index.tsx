import { useRef, useState } from "react";

const DELAY_MIL_SEC = [6000, 3000, 100];
const ID_LABEL = ["A", "B", "C"];

function App() {
  const [data, setData] = useState<any>({ id: "", timestamp: "", back: "" });
  const refReq = useRef<any>();
  const onClick = (id: number) => () => {
    if (!!refReq.current) refReq.current.abort();

    refReq.current = new AbortController();
    fetch(
      `http://localhost:3000/api/mock/demo/delay?id=${id}&delay=${DELAY_MIL_SEC[id]}`,
      { signal: refReq.current.signal }
    )
      .then((response) => {
        return response.json();
      })
      .then((body: any) => {
        console.log(body);
        setData({ ...body });
      })
      .catch((err) => {
        console.error("catch err");
        console.error(err);
      });
  };
  return <div>... ...</div>;
}

export default App
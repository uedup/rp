import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

type listType = {
  name: string,
  data: {
    cbf: string,
    id: string,
    m: string;
    op: string,
    p: string,
  }[]
};
type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [list, setlist] = useState<listType>();
  const initial = () => {
    fetch("/mock/data.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json)
        setlist(json);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    initial();
  }, []);
  return (
    <div>
      {!!list ? (
        <div>
          {list.data.map((item) => {
            return <li key={item.id}>${item.op}</li>;
          })}
        </div>
      ) : (
        "没有数据"
      )}
    </div>
  );
};
export default App;

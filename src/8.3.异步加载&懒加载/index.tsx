import { spawn } from "child_process";
import React, { useState, useEffect, lazy, Suspense } from "react";
// import { data } from "./data";
type listType = {
  name: string;
  default: {};
  devices: {};
};
type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [devices, SetDevices] = useState<listType>();
  const [text, SetText] = useState<string>();
  const loadData = () => {
    import("./data").then((modal) => {
      SetDevices(modal.data);
    });
  };
  const loadFN = () => {
    import("./Fn").then((modal) => {
      SetText(
        modal.default({
          name: "Jery",
          age: 19,
        })
      );
    });
  };
  const LoadComponent = lazy(() => import("./Component"));

  return (
    <div>
      <button onClick={loadData}>异步加载数据</button>
      <button onClick={loadFN}>异步加载函数</button>
      <div>
        <Suspense fallback={<span>Loading ... </span>}>
          <LoadComponent />
        </Suspense>
      </div>
      <div>{devices?.name}</div>
      <div>{text}</div>
    </div>
  );
};
export default App;

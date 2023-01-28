import { useRef } from "react";
import Notice from "./Notice";

type AppProps = {};
interface IModalReturn {
  open: (msg: string[]) => void;
}
const App: React.FC<AppProps> = () => {
  const ref1 = useRef<IModalReturn>();
  const ref2 = useRef<IModalReturn>();
  const handleFocus1 = () => {
    ref1.current?.open(["新消息111"])
    // open(["新消息"]);
  };
  const handleFocus2 = () => {
    ref2.current?.open(["新消息222"])
    // open(["新消息"]);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <Notice ref={ref1} />
      </div>
      <div style={{ position: "relative" }}>
        <Notice ref={ref2} />
      </div>
      <button onClick={handleFocus1}>发出信息1</button>
      <button onClick={handleFocus2}>发出信息2</button>
    </>
  );
};
export default App;

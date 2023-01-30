import { useEffect, useState, useSyncExternalStore } from "react";
import { combineReducers, createStore } from "redux";

/* number Reducer */
type TAction = {
  type: string;
};
function numberReducer(state = 1, action: TAction) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "DEL":
      return state - 1;
    default:
      return state;
  }
}

/* 注册reducer */
const rootReducer = combineReducers({ number: numberReducer });

/* 创建 store */
const store = createStore(rootReducer, { number: 1 });

function Index() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render");
  });
  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("Demo-componentWillUnmount");
    };
  }, []);
  useEffect(() => {
    console.log("shouldComponentUpdate", count);
  }, [count]);
  /* 订阅外部数据源 */
  const state = useSyncExternalStore(
    store.subscribe,
    () => store.getState().number
  );
  console.log(state);

  return (
    <>
      <div>
        <button onClick={() => store.dispatch({ type: "ADD" })}>
          点击(number:{state})
        </button>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>点击(count:{count})</button>
      </div>
    </>
  );
}

export default Index;

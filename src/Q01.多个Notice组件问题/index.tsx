import Notice, { open } from "./Notice";

type AppProps = {};
const App: React.FC<AppProps> = () => {
  const handleFocus = () => {
    open(["新消息"]);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <Notice />
      </div>
      <div style={{ position: "relative" }}>
        <Notice />
      </div>
      <button onClick={handleFocus}>发出信息</button>
      <p>
        暴露的open方法是唯一的，不能控制多个实例。 解决方案：
        <br />
        useImperativeHandle，结合forwardRef 实现父组件调子组件的属性和方法.
        <br />
        见：B04
      </p>
    </>
  );
};
export default App;

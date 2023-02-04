import { config } from 'process';
import { createRef, useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import './index.css'
const StyleBox = styled.div`
padding: 10px;

  .box1{
    /* 前景色 包括文字、边框等颜色 */
    color:blue;
    width:100px;
    height:200px;
    border-width: 1px 10px 30px 5px;
    border-style: solid dashed solid dashed;
    /*不指定border-color,则默认为color的颜色*/
    border-color:red yellow;

    background-color: aliceblue;

    padding:20px 15px 10px 5px;

    margin: 10px;
  }
`;
type AppProps = {

}
type ListType = {
}
const App: React.FC<AppProps> = () => {
  const refBox1 = useRef<HTMLDivElement>(null)
  const refBox2 = createRef<HTMLDivElement>()
  const [posDiv1, setPosDiv1] = useState({
    width:refBox1.current?.clientWidth,
    height:refBox1.current?.clientHeight
  })
  const [posDiv2, setPosDiv2] = useState({
    width:refBox2.current?.offsetWidth,
    height:refBox2.current?.offsetHeight
  })
  console.log(refBox1)
  console.log(refBox2)
  useEffect(() => {

    setPosDiv1({
      width:refBox1.current?.clientWidth,
      height:refBox1.current?.clientHeight
    })
    setPosDiv2({
      width:refBox1.current?.offsetWidth,
      height:refBox1.current?.offsetHeight
    })
    return () => {

    }
  }, [])

  return (
    <>
      <StyleBox>
        <div ref={refBox1} className="box1">
          client宽x高：
          {posDiv1.width}x{posDiv1.height}
          <p>width/height+padding</p>
        </div>
        <div ref={refBox2} className="box1">
          offset宽x高：
          {posDiv2.width}x{posDiv2.height}
          <p>width/height+padding+border</p>
        </div>
      </StyleBox>
      <p>
        widht+height:是内容区域，未来子节点可以使用的区域
        内容区域+padding:clientWidth/clientHeight, 背景色可以覆盖
        clientWidth/clientHeight+border:可见框offsetWidth/offsetHeight
      </p>
    </>
  )
}
export default App
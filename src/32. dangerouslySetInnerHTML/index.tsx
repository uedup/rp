import React, { Fragment, useState } from "react";

export default function Demo() {
  const [list, setList] = useState([
    {
      id:1,
      tit:'ABC'
    },
    {
      id:2,
      tit:'DEF'
    },
    {
      id:3,
      tit:'HIG'
    },
  ]);
  return (<>
    {list.map((item) => { 
      return (
        <Fragment key = {item.id}>
          {item.tit}
        </Fragment>
      )
     } )}
     <p>
      空标签"&lt;&gt;&lt;/&gt;"不能接收key值，一般最为唯一的容器；<br />
      Fragment可接收唯一的属性值key,一般用于循环
     </p>
  </>);
}

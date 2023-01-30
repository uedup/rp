import * as React from 'react';
import { useState, useEffect, useLayoutEffect, useInsertionEffect, useRef, createRef } from 'react';
type IProps = {
}
function Demo(props: IProps) {
    useEffect(() => {
        console.log('useEffect 执行')
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect 执行')
    }, [])

    useInsertionEffect(() => {
        console.log('useInsertionEffect 执行')
    }, [])
    const target = useRef<HTMLSpanElement>(null)
    const target2 = useRef<HTMLSpanElement>()
    const target3 = createRef<HTMLInputElement>()
    useLayoutEffect(() => {
        /*我们需要在dom绘制之前，移动dom到制定位置*/
        // const { x, y } = getPositon() /* 获取要移动的 x,y坐标 */
        // animate(target.current, { x, y })
    }, []);

    return (<>
        <div >
            <span ref={target} className="animate"></span>
        </div>
        <p className='css-in-js'>打印：useInsertionEffect 执行 -》 useLayoutEffect 执行 -》 useEffect 执行</p>
        <p>
            ① 首先 useLayoutEffect 是在 DOM 更新之后，浏览器绘制之前，这样可以方便修改 DOM，获取 DOM 信息，这样浏览器只会绘制一次，如果修改 DOM 布局放在 useEffect ，那 useEffect 执行是在浏览器绘制视图之后，接下来又改 DOM ，就可能会导致浏览器再次回流和重绘。而且由于两次绘制，视图上可能会造成闪现突兀的效果。
        </p>
        <p>
            ② useLayoutEffect callback 中代码执行会阻塞浏览器绘制。
        </p>
    </>);
}

export default Demo;
import * as React from 'react';
import { useState, useEffect, useLayoutEffect, useInsertionEffect } from 'react';
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
    useInsertionEffect(() => {
        /* 动态创建 style 标签插入到 head 中 */
        const style = document.createElement('style')
        style.innerHTML = `
          .css-in-js{
            color: red;
            font-size: 20px;
          }
        `
        document.head.appendChild(style)
    })
    return (<>
        <p className='css-in-js'>打印：useInsertionEffect 执行 -》 useLayoutEffect 执行 -》 useEffect 执行</p>
        <p>
            可以看到 useInsertionEffect 的执行时机要比 useLayoutEffect 提前，useLayoutEffect 执行的时候 DOM 已经更新了，但是在 useInsertionEffect 的执行的时候，DOM 还没有更新。本质上 useInsertionEffect 主要是解决 CSS-in-JS 在渲染中注入样式的性能问题。这个 hooks 主要是应用于这个场景，在其他场景下 React 不期望用这个 hooks 。
        </p>
    </>);
}

export default Demo;
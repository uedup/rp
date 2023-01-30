import React from 'react'
import Rfc from './函数组件'
import Rcc from './类组件'

export default function Demo() {
  return (
    <div>
        <Rfc count={123}></Rfc>
        <Rcc></Rcc>
    </div>
  )
}

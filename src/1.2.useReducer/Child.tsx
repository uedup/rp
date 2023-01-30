import React, { useState } from "react";
type AppProps = {
  dispatch: Function
  State: {
    number: number
  }
};
const Child = (props: AppProps) => {
  const { dispatch, State } = props
  return (
    <>
      <h4>Child Component:{State.number}</h4>
      <button onClick={() => dispatch({ name: 'add', payload: 666 })} >增加</button>
    </>
  )
}

export default Child

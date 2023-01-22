import store from './store'
import sendAction from './action'
import { useEffect, useState } from 'react'
// store.
const Home = () => {
    const [count, setCount] = useState({
        value:store.getState().value,
        info:store.getState().info,
    })
    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            console.log('subscribe:', store.getState())
            // setCount(count+1)
            setCount({
                value:store.getState().value,
                info:store.getState().info,
            })
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const handleClick = () => {
        const action = sendAction()
        store.dispatch(action)
    }
    return (<>
        <button onClick={handleClick}>点击我发送一个action</button>
        <div>
            {/* <div>{store.getState().value}</div>
            <div>{store.getState().info}</div> */}
            <div>{count.value}</div>
            <div>{count.info}</div>
        </div>
    </>)
}

export default Home
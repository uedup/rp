import * as React from 'react';
import { useState } from 'react';

import "./index.css"

type ListType = {
    id: string,
    txt: string,
    checked: boolean
}
type IProps = {
    list: ListType[],
    setList: Function
}

const List: React.FC<IProps> = (props) => {
    const [inputing, setInputing] = useState<null | string>(null)
    const getDone = () => {
        let n = 0;
        props.list.forEach((item) => {
            return item.checked ? n++ : ''
        })
        return n;
    }
    const handleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newList = [...props.list]
        newList.forEach((item) => {
            if (item.id === e.target.id) { item.checked = !item.checked }
        })
        props.setList(newList)
    }
    const handleDoneAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newList = [...props.list]
        newList.forEach((item) => {
            item.checked = e.target.checked
        })
        props.setList(newList)
    }
    const removeItem = (id: string) => {
        let newList = [...props.list].filter(item => item.id !== id)
        props.setList(newList)
    }
    const intoEdit = (e: React.MouseEvent<HTMLElement>, id: string) => {
        // e.stopPropagation()
        setInputing(id)
    }
    const handleUpdata = (e: React.KeyboardEvent<HTMLInputElement>, id: string) => {
        const input = (e.target as HTMLInputElement)
        const v = input.value;
        if (e.code === 'Enter' && v.length > 0) {
            let newList = [...props.list]
            newList.forEach((item) => {
                if (item.id === id) item.txt = v
            })
            props.setList(newList)
            setInputing(null)
        }
    }
    return (
        <>
            <ul className="list">
                {props.list.map((item, index) => {
                    return (<li key={item.id} className={item.checked ? 'done' : ''}>
                        <input onChange={handleDone} type="checkbox" name={item.id} id={item.id} checked={item.checked} />
                        <label className={inputing === item.id ? 'inputing' : ''} onDoubleClick={(e) => { intoEdit(e, item.id) }}>
                            <span>{item.txt} </span>
                            <input type="text" defaultValue={item.txt} onKeyUp={(e) => { handleUpdata(e, item.id) }} />
                        </label>
                        <button className="del" onClick={() => { removeItem(item.id) }}>删除</button>
                    </li>)
                })}
            </ul>
            <div className="result">
                <input type="checkbox" name="" id="" onChange={handleDoneAll} />
                <label htmlFor="">已完成{getDone()}/全部{props.list.length}</label>
            </div>
        </>
    )
}
export default List
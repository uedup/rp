import * as React from 'react';
import { useState } from 'react';

// import "./index.css"

type ListType = {
    id: string,
    txt: string,
    checked: boolean
}
type IProps = {
    list: ListType[],
    changItem: Function,
    removeItem: Function,
    updateItem: Function,
}

const List: React.FC<IProps> = (props) => {
    const {
        changItem,
        removeItem,
        updateItem,
    } = props;
    const [inputing, setInputing] = useState<null | string>(null)

    const handleDone = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        changItem(id, e.target.checked)
    }
    const handleRemove = (id: string) => {
        removeItem(id)
    }
    const handleUpdata = (e: React.KeyboardEvent<HTMLInputElement>, id: string) => {
        const input = (e.target as HTMLInputElement)
        const v = input.value.trim();
        if (e.code === 'Enter' && v.length > 0) {
            updateItem(id, v)
            setInputing(null)
        }
    }
    const intoEdit = (e: React.MouseEvent<HTMLElement>, id: string) => {
        // e.stopPropagation()
        setInputing(id)
    }
    const handleUpdataBlur = (e: React.FocusEvent<HTMLInputElement>, id: string) => {
        const input = (e.target as HTMLInputElement)
        const v = input.value;
        if (v.length > 0) {
            updateItem(id, v)
            setInputing(null)
        }
    }
    return (
        <>
            <ul className="list">
                {props.list.map((item, index) => {
                    return (<li
                        key={item.id}
                        className={item.checked ? 'done' : ''}
                        onDoubleClick={(e) => { intoEdit(e, item.id) }}>
                        <input type="checkbox"
                            onChange={(e) => { handleDone(e, item.id) }}
                            name={item.id}
                            id={item.id}
                            checked={item.checked} />
                        <span className='num'>{index > 9 ? index : '0' + index}</span>
                        <label htmlFor={item.id} className={inputing === item.id ? 'inputing' : ''} >
                            <span>{item.txt} </span>
                            <input type="text"
                                defaultValue={item.txt}
                                onKeyUp={(e) => { handleUpdata(e, item.id) }}
                                onBlur={(e) => { handleUpdataBlur(e, item.id) }}
                            />
                        </label>
                        <b className="btn" onClick={() => { handleRemove(item.id) }}>DEL</b>
                    </li>)
                })}
            </ul>
        </>
    )
}
export default List
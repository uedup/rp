import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames'
import './index.css'

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
    exchangePos: Function,
}

const List: React.FC<IProps> = (props) => {
    const {
        changItem,
        removeItem,
        updateItem,
        exchangePos
    } = props;
    const [inputing, setInputing] = useState<null | string>(null)
    const [fromID, setFromID] = useState<null | number>(null)
    const [toID, setToID] = useState<null | number>(null)

    useEffect(() => {
        document.body.onselectstart = function () {
            return false;
        };
    }, [])

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

    const formItem = (id: number) => {
        setFromID(id)
    }
    const toItem = (id: number) => {
        // exchangePos(fromID, id)
        exchangePos(fromID, toID)
        setFromID(null)
    }
    const highLightItem = (id: number) => {
        setToID(id)
    }
    const normalItem = (id: number) => {
        setToID(null)
    }
    return (
        <>
            <ul 
            className={classNames({
                'list': true,
                
            })}
            >
                {props.list.map((item, index) => {
                    return (<li
                        key={item.id}
                        className={classNames({
                            'done': item.checked,
                            'from': index === fromID,
                            'to': fromID !== null && index === toID,
                            'toLast': toID===props.list.length&&index+1===props.list.length,
                        })}
                        onDoubleClick={(e) => { intoEdit(e, item.id) }}
                        onMouseDown={(e) => { formItem(index);}}
                        onMouseUp={(e) => { toItem(index) }}
                        // onMouseEnter={(e) => { highLightItem(index);}}
                        onMouseLeave={(e) => { normalItem(index) }}
                        onMouseMove={(e) => {
                            if ((e.pageY - (e.target as any).offsetTop) > 12) {
                                highLightItem(index+1);
                            } else {
                                highLightItem(index);
                            }
                        }}
                    >
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
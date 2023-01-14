import { useState, useEffect } from 'react';
import List from "./List"
import "./index.css"
type AppProps = {

}
type ListType = {
  id: string,
  txt: string,
  checked: boolean
}
const App: React.FC<AppProps> = () => {
  const data = localStorage.getItem('todoList')
  let defList = [
    {
      id: '001',
      txt: '挣大钱',
      checked: true
    },
    {
      id: '002',
      txt: '看美女',
      checked: false
    }
    ,
    {
      id: '003',
      txt: '开豪车',
      checked: true
    }
  ]
  const [list, setList] = useState(data&&data?.length>0?JSON.parse(data):defList)
  const changeList = (list: ListType[]) => {
    setList(list)
    localStorage.setItem('todoList',JSON.stringify(list))
  }
  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = (e.target as HTMLInputElement)
    const v = input.value;
    if (e.code === 'Enter' && v.length > 0) {
      let newList = [...list, {
        id: (list.length + 1).toString(),
        txt: v,
        checked: false
      }]
      changeList(newList)
      input.value = ''
    }
  }
  return (
    <>
      <div className="hr"></div>
      <div className="todo">
        <input type="text" className="search" onKeyUp={handleAdd} />
        <List list={list} setList={changeList} />
      </div>
    </>
  )
}
export default App
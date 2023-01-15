import { useState } from 'react';

import List from "./List"
import Header from "./Header"
import Footer from "./Footer"
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
  const [list, setList] = useState(data && data?.length > 0 ? JSON.parse(data) : defList)
  const changeList = (list: ListType[]) => {
    setList(list)
    localStorage.setItem('todoList', JSON.stringify(list))
  }
  const addItem = (item: ListType) => {
    changeList([item, ...list])
  }
  const changItem = (id: string, checked: boolean) => {
    let newList = [...list]
    newList.forEach((item) => {
      if (item.id === id) { item.checked = checked }
    })
    changeList(newList)
  }
  const changeAllItem = (checked: boolean) => {
    let newList = [...list]
    newList.forEach((item) => {
      item.checked = checked
    })
    changeList(newList)
  }
  const removeItem = (id: string) => {
    let newList = [...list].filter(item => item.id !== id)
    changeList(newList)
  }
  const updateItem = (id: string, txt: string) => {
    let newList = [...list]
    newList.forEach((item) => {
      if (item.id === id) { item.txt = txt }
    })
    changeList(newList)
  }
  const getDoneNum = () => {
    let n = 0;
    list.forEach((item: ListType) => {
      return item.checked ? n++ : ''
    })
    return [n, list.length];
  }
  return (
    <>
      <div className="hr"></div>
      <div className="todo">
        <Header addItem={addItem} />
        <List
          list={list}
          changItem={changItem}
          removeItem={removeItem}
          updateItem={updateItem}
        />
        <Footer
          changeAllItem={changeAllItem}
          getDoneNum={getDoneNum}
        />
      </div>
    </>
  )
}
export default App
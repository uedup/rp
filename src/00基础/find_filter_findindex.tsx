// import * as React from 'react';
// import { useState, useEffect } from 'react';

export default function Demo() {
    const findFN = () => {
        let linklist = [
            { id: 1, userName: "zs" },
            { id: 2, userName: "ls" },
            { id: 3, userName: "ww" },
            { id: 4, userName: "zl" },
        ];
        //find()方法 ：返回的结果为查找到的元素// { id:4,userName:"zl" },
        let ad = linklist.find(item => {
            // if (item.id === 4) {
            //     return true
            // }
            return item.id === 4;
        })
        console.log(ad)
    }
    const findIndexFN = () => {
        let linklist = [
            { id: 1, userName: "zs" },
            { id: 2, userName: "ls" },
            { id: 3, userName: "ww" },
            { id: 4, userName: "zl" },
        ];
        //findIndex()方法：返回的是索引值//4  没有返回-1
        let ad = linklist.findIndex(item => {
            // if (item.id === 4) {
            //     return true
            // }
            return item.id === 4
        })
        console.log(ad)
    }
    const filterFN = () => {
        let linklist = [
            { id: 1, userName: "zs" },
            { id: 2, userName: "ls" },
            { id: 3, userName: "ww" },
            { id: 4, userName: "zl" },
        ];
        let admins = linklist.filter(item => {
            // if (item.id > 2) {
            //     return true
            // }
            return item.id > 2
        })
        console.log(admins)
    }
    return (<>
        <div>比较filter,find,findIndex</div>
        <div><button onClick={filterFN}>filter</button></div>
        <div><button onClick={findFN}>find</button></div>
        <div><button onClick={findIndexFN}>findIndex</button></div>
    </>)
}

// import * as React from 'react';
// import { useState, useEffect } from 'react';

export default function Demo() {
    const handleForEach = () => {
        let arr = ['a', 'b', 'c', 'd']
        arr.forEach(function (val, index, arr) {
            console.log('index:' + index, 'val:' + val) // val是当前元素，index当前元素索引，arr数组
            console.log(arr)
        })
    }
    const handleForIn = () => {
        let arr1 = [1, 2, 3, 4];
        // arr1.b = '100';
        for (let key in arr1) {
            console.log(key);//会把b输出来
        }
        console.log('++++++++++++++++++++++++')
        //遍历数组时，item表示索引值， arr表示当前索引值对应的元素 arr[item]
        let arr2 = ['a', 'b', 'c'];
        for (let item in arr2) {
            console.log(item) //0 1 2
            console.log(arr2[item]) //a b c
        }
        console.log('++++++++++++++++++++++++')
        type stringKey = Record<string, number>
        //遍历对象时，item表示key值，arr表示key值对应的value值 obj[item]
        let obj: stringKey = { a: 1, b: 2, c: 3 };
        for (let item in obj) {
            console.log(item)
            console.log("obj." + item + " = " + obj[item]);
        }
        // obj.a = 1
        // obj.b = 2
        // obj.c = 3
    }
    const handleForOf = () => {
        /*循环一个数组*/
        let arr = ['A', 'B', 'C']
        for (let val of arr) {
            console.log(val)
        }
        // A B C
        console.log('++++++++++++++++++++++++')
        /*循环一个字符串：*/
        let iterable = "abc";
        for (let value of iterable) {
            console.log(value);
        }
        // "a"
        // "b"
        // "c"
        console.log('++++++++++++++++++++++++')
        /*循环一个拥有enumerable属性的对象*/
        type stringKey = Record<string, number>
        let someObject: stringKey = { a: 1, b: 2, c: 3 };
        for (var key of Object.keys(someObject)) {
            console.log(key + ": " + someObject[key]);
        }
        //for of 并不能直接使用在普通的对象上,需要通过和Object.keys()搭配使用
    }
    const handleMap = () => {
        const arrAges = [10, 20, 30, 40];
        // ES5:
        const es5Result = arrAges.map(function (item) {
            return item * 2;
        });
        console.log(es5Result); // [ 20, 40, 60, 80 ]
        const es6Result = arrAges.map((item) => item * 2).reduce((a, b) => a + b);
        console.log(es6Result); // 200
    }
    return (<>
        <div>
            <h3>forEach</h3>
            <p>forEach专门用来循环数组，可以直接取到元素，同时也可以取到index值</p>
            <p>存在局限性，不能continue跳过或者break终止循环，没有返回值，不能return</p>
            <div><button onClick={handleForEach}>forEach</button></div>
        </div>
        <div>
            <h3>for in</h3>
            <p>for...in 一般循环遍历的都是对象的属性，遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性</p>
            <p>key会变成字符串类型</p>
            <div><button onClick={handleForIn}>forIn</button></div>
        </div>
        <div>
            <h3>for of</h3>
            <p>for of是ES6新引入的特性。修复了ES5中for in的不足</p>
            <p>允许遍历 Arrays（数组）、Strings（字符串）、Maps（映射）、Sets（集合）等可迭代的数据结构</p>
            <p>for of 支持return, 只能遍历数组不能遍历对象（遍历对象需要通过和Object.keys()搭配使用</p>
            <div><button onClick={handleForOf}>forOf</button></div>
        </div>
        <div>
            <h3>map</h3>
            <p>map函数用于遍历数组元素。它接受一个回调函数作为参数，根据回调函数返回一个新数组和新元素。</p>
            <p>回调函数接受三个参数（元素、值和索引）。</p>
            <div><button onClick={handleMap}>Map</button></div>
        </div>
    </>)
}

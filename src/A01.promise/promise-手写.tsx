import Promise from './Promise'
type AppProps = {
}
const App: React.FC<AppProps> = () => {
    // let p = new (Promise as any)((resolve: Function, reject: Function) => {
    //     // 异步的
    //     setTimeout(() => {
    //         resolve('okk')
    //         // reject('err')
    //         // throw 'oh no' 
    //     }, 1000);
    //     // 同步的
    //     // resolve('okk')
    //     // reject('err') 
    //     // throw 'oh no' 

    // })
    // // console.log(p)
    // // const result = p.then((value:string) => { 
    // //     console.log(value)
    // //     // return 'oh yeah'
    // //     // return new Promise((resolve:Function, reject:Function) => {
    // //     //     // resolve('123')
    // //     //     // reject('oh no') 
    // //     //     // throw 'errorr' 
    // //     // })
    // // }, (reason:string) => {
    // //     console.log(reason)  
    // // })
    // // const result = p.catch((reason:string) => {
    // //     console.log(reason)
    // // })

    // const result = p.then((value: string) => {
    //     console.log(value)
    //     return 111;
    // }).then((value: string) => {
    //     console.log(value)
    //     // throw '8888';
    //     return 222;
    // }).then((value: string) => {
    //     console.log(value)
    //     return 333;
    // }).then((value: string) => {
    //     console.log(value)
    //     return 444;
    // }).catch((reason: string) => {
    //     console.log(reason)
    // })

    // console.log(result)

    // let p2 = Promise.resolve('abc')
    // let p2 = Promise.resolve(new Promise((resolve:Function, reject:Function) => {
    //     reject('345')
    // }))
    // console.log(p2)

    // let p1 = Promise.resolve('abc')
    // let p2 = Promise.reject('yes')
    // let p3 = Promise.resolve('success')
    // let result = Promise.all([p1, p2, p3])
    // console.log(result)



    let p = new (Promise as any)((resolve: Function, reject: Function) => {
        // 异步的
        // setTimeout(() => {
        //     resolve('okk')
        //     // reject('err')
        //     // throw 'oh no' 
        // }, 1000);
        // 同步的
        // resolve('okk')
        // reject('err') 
        throw 'oh no' 
    })

    const result = p.then((value:string) => { 
        console.log(value)
    }, (reason:string) => {
        console.log(reason)  
    })
    console.log(result)
    return (
        <div>
            <h3>手写Promise</h3>
        </div>
    )
}
export default App
type AppProps = {

}
const App: React.FC<AppProps> = () => {
    console.log('render')
    const rand = (m: number, n: number) => {
        return Math.ceil(Math.random() * (n - m + 1)) + m - 1
    }

    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = rand(1, 100)
            if (n < 50) {
                resolve(n)
            } else {
                reject(n)
            }
        }, 2000)
    })

    p.then((data) => {
        console.log(data)
    }, (reason) => {
        console.log(reason);
    })


    return (
        <div>promise 演示1</div>
    )
}
export default App
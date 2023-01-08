import sendAjax from './sendAjax'
type AppProps = {
}
const App: React.FC<AppProps> = () => {
    const handleSendAJAX = () => {
        sendAjax('https://dev.usemock.com/63ba7a28841a3542da70d0c4/userinfo')
        .then((data) => {
            console.log(data)
        }, (reason) => {
            console.log(reason);
        })
    }
    const handlePromise = () => {
        let p = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://dev.usemock.com/63ba7a28841a3542da70d0c4/userinfo')
            xhr.send()
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.response)
                    } else {
                        reject(xhr.status)
                    }
                }
            }
        })

        p.then((data) => {
            console.log(data)
        }, (reason) => {
            console.log(reason);
        })
    }
    const handleFN = () => {
        console.log('click')
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://dev.usemock.com/63ba7a28841a3542da70d0c4/userinfo')
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log(xhr.response)
                } else {
                    console.log(xhr.status)
                }
            }
        }
    }
    return (
        <div>
            <h3>Promise 封装 AJAX 操作</h3>
            <button onClick={handleFN} className="btn">点击发送请求:调用xhrhttprequset</button>
            <button onClick={handlePromise} className="btn">点击发送请求:promise</button>
            <button onClick={handleSendAJAX} className="btn">点击发送请求:封装promise的ajax</button>
        </div>
    )
}
export default App
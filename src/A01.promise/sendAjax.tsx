const sendAJAX = (url:string  ) => { 
    return new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.responseType = 'json'
        xhr.open('GET',url)
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
 }
 export default sendAJAX
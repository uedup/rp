
class Promise {
    private PromiseState: 'pending' | 'fulfilled' | 'rejected' = 'pending'
    private PromiseResult: any = null
    private callbacks = [{
        onResolve: () => { },
        onReject: () => { }
    }]
    constructor(executor: Function) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    resolve = (data: any) => {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'fulfilled'
        this.PromiseResult = data
        setTimeout(() => {
            this.callbacks.forEach(item => {
                if (typeof item.onResolve === 'function') (item.onResolve as Function)(data)
            })
        })
    }
    reject = (data: any) => {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'rejected'
        this.PromiseResult = data
        setTimeout(() => {
            this.callbacks.forEach(item => {
                if (typeof item.onReject === 'function') (item.onReject as Function)(data)
            })
        })
    }
    then = (onResolve: any, onReject: any) => {
        let self = this;
        //判断回调函数参数
        if (typeof onResolve !== 'function') {
            onResolve = (value: any) => {
                return value
            }
        }
        if (typeof onReject !== 'function') {
            onReject = (reason: any) => {
                throw reason
            }
        }
        return new Promise((resolve: Function, reject: Function) => {
            //封装函数
            const cb = (type: Function) => {
                try {
                    let result = type(self.PromiseResult)
                    if (result instanceof Promise) {
                        result.then((value: string) => {
                            resolve(value)
                        }, (reason: string) => {
                            reject(reason)
                        })
                    } else {
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }
            if (self.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    cb(onResolve)
                })
            }
            if (self.PromiseState === 'rejected') {
                setTimeout(() => {
                    cb(onReject)
                })
            }
            if (self.PromiseState === 'pending') self.callbacks.push({
                onResolve: () => {
                    cb(onResolve)
                },
                onReject: function () {
                    cb(onReject)
                }
            })
        })
    }
    catch = (onReject: any) => {
        return this.then(undefined, onReject)
    }
    static resolve = (value: any) => {
        return new Promise((resolve: Function, reject: Function) => {
            try {
                if (value instanceof Promise) {
                    value.then((value: string) => {
                        resolve(value)
                    }, (reason: string) => {
                        reject(reason)
                    })
                } else {
                    resolve(value)
                }
            } catch (e) {
                reject(e)
            }
        })
    }
    static reject = (reason: any) => {
        return new Promise((resolve: Function, reject: Function) => {
            try {
                reject(reason)
            } catch (e) {
                reject(e)
            }
        })
    }
    static all = (promises: Array<Promise>) => {
        return new Promise((resolve: Function, reject: Function) => {
            let result: any = []
            let count = 0
            promises.forEach((p, i) => {
                p.then((v: any) => {
                    result[i] = v
                    count++
                }, (r: any) => {
                    reject(r)
                })
            })
            if (count === promises.length) reject(result)
        })
    }
    static race = (promises: Array<Promise>) => {
        return new Promise((resolve: Function, reject: Function) => {
            promises.forEach((p, i) => {
                p.then((v: any) => {
                    resolve(v)
                }, (r: any) => {
                    reject(r)
                })
            })
        })
    }
}
export default Promise
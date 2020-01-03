# 欢迎使用 uni_request.js

最近在使用uni-app开发应用，因为用axios用的太顺手了，就对uni.request方法做了一个封装，使其使用起来和axios的方法和效果一样。因为是自己现做现用，api设计的都比较简单，代码不也不复杂，但是却很实用。如有BUG，还请不吝指出，非常感谢。

PS: 有人知道 Proxy 一个原生 Promise 对象时不能调用 then 等方法是为什么嘛？ 会报错 TypeError: Method Promise.prototype.then called on incompatible receiver [object Object] 。在 uniapp 开发时 浏览器和微信小程序开发工具都会报错，但是app不会。我猜可能是 Promise 的原因，加了一个 Promise polyfill 就好了。如有大神知道，还请不吝留下评论或联系本人。微信：18338112210。非常感谢！

----



## 使用


```javascript
import uni_request from './uni_request.js'

const request = uni_request({ // 有效配置项只有三个
	baseURL: 'http://192.168.0.13/dwbsapp', //baseURL
	timeout: 1111, // 超时时间
	heaers: {
		'x-custom-header': 'x-custom-header'
	}
})

request.interceptors.request.use(async (config, ...args) => { // 请求拦截器（可以设置多个, 同时可以也可以使用异步方法）
	await new Promise(resolve => setTimeout(() => resolve(), 3000))
	console.log('请求拦截器, 网络请求会等 3 秒后上面的异步任务结束后执行') // args[0] method args[1] url args[3] data
	return config
})

request.interceptors.response.use((response, ...args) => { // 响应拦截器（可以设置多个, 同时可以也可以使用异步方法）
	const { data: res } = response // args[0] method args[1] url args[3] data
	await new Promise(resolve => setTimeout(() => resolve(), 3000))
	if (res.code === 200) {
		console.log('响应拦截器， 会阻塞 3 s')
	}
	return response
})


request.overtime = (...args) => { // 超时钩子函数（可以设置多个, 同时可以也可以使用异步方法）
	console.log('超时了')
}

request.onerror = (...args) => { // 请求失败统一处理方法（可以设置多个, 同时可以也可以使用异步方法）
	console.log('网络请求失败了', `url为${args[1]}`)
}

request.get('/').then(res => { // 默认使用实例化时配置的 baseURL
	console.log(res)
}).catch(e => console.error(e))

request.get('http://xxx.com').then(res => { // 也可以使用配置的 baseURL 之外的 url，但是注意 url 路径要写完整
	console.log(res)
}).catch(e => console.error(e))

// 取消一个请求
const task = request.get('/cancel') // 如果想要取消某个请求，需要在 then 之前将 request.get 方法返回的 promise 对象保存在一个变量里
task.then(res => {
	console.log(res)
}).catch(e => console.error(e)) // 网络请求失败：主动取消
task.cancel() 
// 在需要的时候调用 cancel 方法
// 会使当前网络请求取消并且使 request.get 方法返回的 promise 进入 reject 状态
// 可被 catch 捕获，错误信息为 【网络请求失败：主动取消】
// 如果在请求拦截器的异步期间取消，那么会在请求拦截器的异步操作结束后直接使返回的 Promise 进入 reject 状态，并不会发出网络请求

```

OnerrOr

![onerror](https://raw.githubusercontent.com/yinchengnuo/uni_request/master/onerror.png)

##### request.onerror = (...args) => { ... }


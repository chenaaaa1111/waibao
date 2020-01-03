import uni_request from './uni_request/uni_request.js';

const request = uni_request({ // 有效配置项只有三个
	//baseURL: 'http://180.167.29.132:18080', //baseURL
	baseURL:'http://localhost:8081',
	timeout: 160000, // 超时时间
	// heaers: {
	// 	'x-custom-header': 'x-custom-header'
	// }
})

request.interceptors.request.use((config, ...args) => { // 请求拦截器（可以设置多个, 同时可以也可以使用异步方法）
	if(args[1].indexOf('login.lf') != -1){
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	}else{
		
	}

	return config
})

request.interceptors.response.use((response, ...args) => { // 响应拦截器（可以设置多个, 同时可以也可以使用异步方法）
	const { data: res } = response // args[0] method args[1] url args[3] data
	// await new Promise(resolve => setTimeout(() => resolve(), 3000))
	if (res.code === 200) {
		console.log('响应拦截器， 会阻塞 3 s')
	}
	return response
})

request.overtime = (...args) => { // 超时钩子函数（可以设置多个, 同时可以也可以使用异步方法）
	console.log('超时了')
}

request.onerror = (...args) => { // 请求失败统一处理方法（可以设置多个, 同时可以也可以使用异步方法）
	console.log('报错了')
}

export default {
	request
}

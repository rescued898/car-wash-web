import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  
  response => {
    // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
    var token = response.headers.authorization
    if (token) {
        // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
        this.$store.dispatch('refreshToken', token)
    }
    return response
},
error => {
    switch (error.response.status) {

        // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
        case 401:
            return this.$store.dispatch('logout')
            break
        // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
        case 400:
            return this.$Message.error(error.response.data.error)
            break
    }
    return Promise.reject(error)
}

)

export default service

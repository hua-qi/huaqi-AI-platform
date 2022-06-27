import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
})

// 请求拦截器
instance.interceptors.request.use(
    config => {
        console.log('被拦截做一些操作')
        return config
    },
    err => {
        return err
    },
)

export default instance

 import axios from './interceptor'
// 登录
export const $requestPost = async (url,params) => {
    let { data } = await axios.post(url, params)
    return data
}
export const $requestGet = async (url,params) => {
    let { data } = !params ? await axios.get(url,{params}) : await axios.get(url)
    return data
}
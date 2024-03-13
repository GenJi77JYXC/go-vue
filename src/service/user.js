import request from '@/util/request'
//引入qs将json转换为postform
import qs from 'qs'

//用户注册
const register = ({username,password}) => (request.post('register', qs.stringify({username,password})))
//用户登录
const login = ({username,password}) => (request.post('login',qs.stringify({username,password})))
//用户信息
const info = () => (request.get('userinfo'))

export default {
    register,
    login,
    info
}
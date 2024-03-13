import {defineStore} from 'pinia'
import storage from '@/service/storage'
import userService from '@/service/user'

const useUserStore = defineStore("user",{
    state:() => ({
        token: storage.get(storage.USER_TOKEN),
        userInfo: storage.get(storage.USER_INFO)
        ? JSON.parse(storage.get(storage.USER_INFO))
        : null,
    }),
    actions:{
        SET_TOKEN(token) {
            storage.set(storage.USER_TOKEN,token)
            this.token = token
        },
        SET_USERINFO(userInfo) {
            storage.set(storage.USER_INFO,JSON.stringify(userInfo))
            this.userInfo = userInfo
        },
        register(username,password){
            return new Promise((resolve,reject) => {
                userService.register({username, password})
                .then((res) => {
                    this.SET_TOKEN(res.data.data.token)
                    return userService.info()
                })
                .then((res) => {
                    this.SET_USERINFO(res.data.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        login(username,password){
            return new Promise((resolve, reject) => {
                userService.login({username, password})
                .then((res) => {
                    this.SET_TOKEN(res.data.data.token)
                    userService.info()
                    .then((res) => {
                        this.SET_USERINFO(res.data.data)
                        resolve(res)
                    })
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
    }
})

export default useUserStore
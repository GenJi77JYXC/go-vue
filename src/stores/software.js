import { defineStore } from 'pinia'
import softwareService from '@/service/software'

const useSoftwareStore = defineStore("software", {
    state: () => ({

    }),
    actions: {
        fileAdd({id, name, file}){
            return new Promise((resolve, reject) => {
                softwareService.fileAdd({id, name, file}).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        fileUpdate({id, name, file}){
            return new Promise((resolve, reject) => {
                softwareService.fileUpdate({id, name, file}).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        imageAdd({id, name, file}){
            return new Promise((resolve, reject) => {
                softwareService.imageAdd({id, name, file}).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        imageUpdate({id, name, file}){
            return new Promise((resolve, reject) => {
                softwareService.imageUpdate({id, name, file}).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        // register(username,password){
        //     return new Promise((resolve,reject) => {
        //         userService.register({username, password})
        //         .then((res) => {
        //             this.SET_TOKEN(res.data.data.token)
        //             return userService.info()
        //         })
        //         .then((res) => {
        //             this.SET_USERINFO(res.data.data)
        //             resolve(res)
        //         })
        //         .catch((err) => {
        //             reject(err)
        //         })
        //     })
        // },
        list() {
            return new Promise((resolve, reject) => {
                softwareService.list().then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },

    }
})

export default useSoftwareStore
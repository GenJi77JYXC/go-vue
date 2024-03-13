import { defineStore } from 'pinia'
import deviceService from '@/service/device'

const useDeviceStore = defineStore("device", {
    state: () => ({

    }),
    actions: {
        
        list() {
            return new Promise((resolve, reject) => {
                deviceService.list().then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        listData(id) {
            return new Promise((resolve, reject) => {
                deviceService.listData(id).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        }

    }
})

export default useDeviceStore
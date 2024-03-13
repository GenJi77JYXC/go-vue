import request from "@/util/request"

//列出设备
const list = () => (request.get('/device/devices'))
//列出设备数据
const listData = (id) => (request.get('/device/device_datas', {params:id}))
export default {
    list,
    listData,
}
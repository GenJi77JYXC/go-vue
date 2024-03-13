import request from '@/util/request'


//列出软件
const list = () => (request.get('/software/list'))
const imageAdd = ({id, name, file}) => (request.post('/software/image/add', {id, name, file}, {headers: {'Content-Type': 'multipart/form-data'}}))
const imageUpdate = ({id, name, file}) => (request.post('/software/image/update', {id, name, file},{headers: {'Content-Type': 'multipart/form-data'}}))
const fileAdd = ({id, name, file}) => (request.post('/software/file/add', {id, name, file}, {headers: {'Content-Type': 'multipart/form-data'}}))
const fileUpdate = ({id, name, file}) => (request.post('/software/file/update', {id, name, file}, {headers: {'Content-Type': 'multipart/form-data'}}))

export default {
    list,
    imageAdd,
    imageUpdate,
    fileAdd,
    fileUpdate
}
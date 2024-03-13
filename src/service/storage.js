//本地缓存服务

const PREFIX = 'metc_';

//用户头
const USER_PREFIX = `${PREFIX}user_`;

//要存的东西
const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;

//存
// function set(key,value){
//     localStorage.setItem(key,value)
// }

const set = (key, value) => {
    localStorage.setItem(key,value)
}

//取

const get = (key) => {
   return localStorage.getItem(key)
}


export default {
    set,
    get,
    USER_INFO,
    USER_TOKEN
}
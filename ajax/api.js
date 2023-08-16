import config from './config.js' // 基础路径
import service from './service.js' //封装的axios
/**
 * data 是post传参
 *
 */
export const register = (data)=> service({
  url: `${config.proxyBaseUrl}/public/register`,
  method: 'POST',
  data: data,
  headers:{
   
  },
})
export const login = (data)=> service({
    url: `${config.proxyBaseUrl}/public/Login`,
    method: 'POST',
    data: data,
    
})
export const getName = token=> service({
    url: `${config.proxyBaseUrl}/user/getUser`,
    method: 'GET',
    headers: {
        token: token
    }
})
export const getRotationChart =  token=> service({
    url: `${config.proxyBaseUrl}/slideshow/getRotationChart`,
    method: 'GET',
    headers: {
        token: token
    }
})
export const getDishes = (currentPage,pageSize,token)=> service({
    url: `${config.proxyBaseUrl}/food/getDishes`,
    method: 'GET',
    headers: {
        token: token
    },
    params: {
        currentPage: currentPage,
        pageSize: pageSize
    }
})

export const getNewList = (currentPage,pageSize,token)=> service({
    url: `${config.proxyBaseUrl}/news/getNewList`,
    method: 'GET',
    headers: {
        token: token
    },
    params: {
        currentPage: currentPage,
        pageSize: pageSize
    }
})

export const getNewDetail = (id,token)=> service({
    url: `${config.proxyBaseUrl}/article/getNewDetail`,
    method: 'GET',
    headers: {
        token: token
    },
    params: {
        id: id
    }
})


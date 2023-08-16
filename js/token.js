function setToken(token){
    window.localStorage.setItem('1',token);
    
}
function getToken(){
    return window.localStorage.getItem('1')
}
function removeToken(){
    window.localStorage.removeItem('1')
}
export{setToken,getToken,removeToken}
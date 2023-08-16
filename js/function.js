import { getToken,removeToken} from "./token.js";
let clear = document.getElementById('clear')
let look = document.getElementById('look')
clear.onclick = ()=>{
    removeToken();
    alert("退出成功！")
    window.location.href="../login.html";
}
look.onclick = ()=>{

}

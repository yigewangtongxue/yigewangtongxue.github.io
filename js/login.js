import {login,getName} from '../ajax/api.js'
import { setToken } from './token.js'
let email = document.getElementById('email')
let password = document.getElementById('password')

let loginEmail = document.getElementById('loginEmail')



loginEmail.onclick = ()=>{
    if(email.value.length == 0){
        alert("您还未输入邮箱")
    }
    else if(password.value.length == 0){
        alert("您还未输入密码")
    }
    else{
        login({
            email: email.value,
            password: password.value
        }).then(res=>{
            if(res.data.msg == 'success'){
                alert("欢迎光临"+res.data.data.userName)
                setToken(res.data.data.token)
                
                window.location.href="../index.html";
            }
            else if(res.data.msg == '密码错误'){
                alert('密码错误')
            }
            else{
                alert('账户还未注册，请转往注册界面进行注册')
            }
        })
    }
}



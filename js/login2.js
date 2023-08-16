import {login} from '../ajax/api.js'
import { setToken } from './token.js'
let account = document.getElementById('account')
let loginTelephone = document.getElementById('loginTelephone')
let password = document.getElementById('password')
loginTelephone.onclick = ()=>{
    if(account.value.length == 0){
        alert("您还未输入手机号")
    }
    else if(password.value.length == 0){
        alert("您还未输入密码")
    }
    else{
        login({
            account: account.value,
            password: password.value
        }).then(res=>{
            if(res.data.msg == 'success'){
                console.log(res.data.data.token)
                setToken(res.data.data.token)
                alert("欢迎光临"+res.data.data.userName)
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
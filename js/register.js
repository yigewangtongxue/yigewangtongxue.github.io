import {register} from '../ajax/api.js'


let registers=document.getElementById('register');
let account = document.getElementById('account');
let email = document.getElementById('email');
let password = document.getElementById('password');
let resetPw = document.getElementById('resetpw')
let userName = document.getElementById('userName');
let usernameError = document.getElementById('accountError')
let emailError = document.getElementById('emailError')
let passwordError = document.getElementById('passwordError')
function checkTelephone(telephone) {
    let reg=/^[1][3,5,7,9,8][0-9]{9}$/;
    if (!reg.test(telephone)) {
        return false;
    } else {
        return true;
    }
}

function checkEmail(email) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(reg.test(email)) {
        return true;
    }
    else{
        return false;
    }
}

function checkPassword(passwords){
    if(passwords!=password.value){
        return false;
    }
    else{
        return true;
    }
}

account.oninput = ()=>{
    if (!checkTelephone(account.value)){
        usernameError.innerHTML = '<font color="red">手机号不符合规范</font>'
    }
    else{
        usernameError.innerHTML = '<font color="green">手机号符合规范</font>'
    }
}

resetPw.oninput = ()=>{
    if(checkPassword(resetPw.value)){
        passwordError.innerHTML = '<font color="green">密码一致</font>'
    }
    else{
        passwordError.innerHTML = '<font color="red">两次密码不一致，请检查</font>'
    }
}

email.oninput =()=>{
    if(checkEmail(email.value)){
        emailError.innerHTML = '<font color="green">邮箱符合规范</font>'
    }
    else{
        emailError.innerHTML = '<font color="red">邮箱不符合规范</font>'
    }
}

registers.onclick = ()=>{
    if(!checkTelephone(account.value)){
        alert('您的电话号码填写错误')
    }
    else if(!checkEmail(email.value)){
        alert('您的邮箱填写错误')
    }  
    else if(!checkPassword(resetPw.value)){
        alert('您的密码不一致，请检查')
    } 
    else{
        register({
            account: account.value,
            password: password.value,
            email: email.value,
            userName: userName.value
        }).then(res=>{
            if(res.data.msg == 'success'){
                alert('恭喜您，注册成功，请返回登录')
                window.location.href="../login.html";
            }
            else{
                alert('手机号或邮箱被使用，请重试')
                
            }
        })
    }
}
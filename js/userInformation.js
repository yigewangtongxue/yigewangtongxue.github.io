import { getToken } from "./token.js";
import { getName } from "../ajax/api.js";
let account;
let userName;
let email;
$(function () {
    $('[data-toggle="popover"]').popover({
        title: '个人信息',
        html: true,
        content: ()=>{
           return contentx();
        }
    });
    
    
  });
function contentx(){
    let contents = $("<li>昵称："+userName+"</li><li>手机号："+account+"</li><li>邮箱："+email+"</li>");
    return contents;
  }
async function gn(){
    let token = getToken();
    let data = await getName(token);
    account = data.data.data.account;
    email = data.data.data.email;
    userName = data.data.data.userName;
}
gn()
  

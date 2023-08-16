import { getDishes } from "../ajax/api.js"
import { getToken } from "./token.js"
let ths = document.querySelectorAll('.imgs')
let tabs = document.querySelectorAll('.tab')
let As = document.querySelectorAll('.A')
for(let i = 0; i < tabs.length; i ++ ) {
    tabs[i].onclick = async ()=>{
        for(let j =0; j < As.length; j ++  ){
            As[j].classList.remove('active');
        }
        As[i].classList.add('active');
        let token = getToken();
        let data =await getDishes(tabs[i].text,12,token);
        for(let j = 0; j < ths.length; j ++ ) {
            ths[j].src = data.data.data[j].pic;
        }
       
    }
}
async function init(){
    let token = getToken();
    let data = await getDishes(tabs[0].text,12,token);
    for(let j = 0; j < ths.length; j ++ ) {
        ths[j].src = data.data.data[j].pic;
    }
}
init()

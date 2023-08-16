import { getRotationChart } from "../ajax/api.js";
import { getToken } from "./token.js";
let img_1 = document.getElementById('one');
let img_2 = document.getElementById('two');
let img_3 = document.getElementById('three');
let a_1 = document.getElementById('a_1');
let a_2 = document.getElementById('a_2');
let a_3 = document.getElementById('a_3');
let h_1 = document.getElementById('h_1');
let h_2 = document.getElementById('h_2');
let h_3 = document.getElementById('h_3');
async function getImage(){
    let data = await getRotationChart(getToken());
    img_1.src = data.data.data[0].img;
    img_2.src = data.data.data[1].img;
    img_3.src = data.data.data[2].img;
    a_1.href = data.data.data[0].target;
    a_2.href = data.data.data[1].target;
    a_3.href = data.data.data[2].target;
    h_1.innerText = data.data.data[0].foodName;
    h_2.innerText = data.data.data[1].foodName;
    h_3.innerText = data.data.data[2].foodName;
}
getImage()

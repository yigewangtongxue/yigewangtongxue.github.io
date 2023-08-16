import { getRotationChart } from "../ajax/api.js";
import { getToken ,removeToken} from "./token.js";

let token = getToken();
let imgs = await getRotationChart(token);
if(imgs.data.msg == "token 无效") {
    removeToken();
    window.open()
}
document.getElementById("one").src = img.data.data[0].img;
document.getElementById("two").src = img.data.data[1].img;
document.getElementById("three").src = img.data.data[2].img;
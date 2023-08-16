import { getToken } from "./token.js";
import { getNewList } from "../ajax/api.js";
import { getNewDetail } from "../ajax/api.js";

let tabs = document.querySelectorAll('.tab')
let listGroup = document.querySelector('.list-group')
let As = document.querySelectorAll('.A')
let app = document.querySelector('#app');
for(let i = 0; i < tabs.length; i ++ ) {
    tabs[i].onclick = async ()=>{
        for(let j =0; j < As.length; j ++  ){
            As[j].classList.remove('active');
        }
        As[i].classList.add('active');
        let token = getToken();
        let data = await getNewList(tabs[i].text,12,token);
        let lists = data.data.data
        let childs = listGroup.childNodes;
        let appChild = app.childNodes;
        for(let j = appChild.length-1;j>=0;j--){
            app.removeChild(appChild[j]);
        }
        for(let j = childs .length - 1; j >= 0; j--) {

        listGroup.removeChild(childs[j]);

        }
	    for(let j = 0; j < 12; j++) {
		    let op = document.createElement('a');
            op.setAttribute("href","#");
            op.setAttribute("class","list-group-item");
            op.setAttribute("id",lists[j].id);
            op.innerHTML=lists[j].title+"<span>"+lists[j].publishTime+"</span></a>";
            listGroup.appendChild(op);
            
	    }
        let items = document.querySelector('.list-group');
        let chlid = items.childNodes;
        for(let j = 0; j < chlid.length; j ++ ) {
            chlid[j].onclick = async ()=>{
                let token = getToken();
                let data = await getNewDetail(chlid[j].id,token);
                let parser = new DOMParser();
                let doc = parser.parseFromString(data.data.data.article, "text/html");
                const walker = document.createTreeWalker(doc);
                const commentNodes = [];
                while(walker.nextNode()) {
                    const node = walker.currentNode;
                    if (node.nodeType === Node.COMMENT_NODE) {
                        commentNodes.push(node);
                    }

                    if (node.nodeName === 'A') {
                        node.textContent = '这是一个标签';
                    }
                }

                commentNodes.forEach(node => node.parentNode.removeChild(node));

                document.getElementById('app').innerHTML = doc.body.innerHTML;
            }
        }
    }
}

async function init(){
    let token = getToken();
    let data = await getNewList(tabs[0].text,12,token);
    let lists = data.data.data
	var childs = listGroup.childNodes;

        for(let j = childs .length - 1; j >= 0; j--) {

        listGroup.removeChild(childs[j]);

        }
	    for(let j = 0; j < 12; j++) {
		    let op = document.createElement('a');
            op.setAttribute("href","#");
            op.setAttribute("class","list-group-item");
            op.setAttribute("id",lists[j].id);
            op.innerHTML=lists[j].title+"<span>"+lists[j].publishTime+"</span></a>";
            listGroup.appendChild(op);
            
	    }
        let items = document.querySelector('.list-group');
        let chlid = items.childNodes;
        for(let j = 0; j < chlid.length; j ++ ) {
            chlid[j].onclick = async ()=>{
                let token = getToken();
                let data = await getNewDetail(chlid[j].id,token);
                let parser = new DOMParser();
                let doc = parser.parseFromString(data.data.data.article, "text/html");
                const walker = document.createTreeWalker(doc);
                const commentNodes = [];
                while(walker.nextNode()) {
                    const node = walker.currentNode;
                    if (node.nodeType === Node.COMMENT_NODE) {
                        commentNodes.push(node);
                    }

                    if (node.nodeName === 'A') {
                        node.textContent = '这是一个标签';
                    }
                }

                commentNodes.forEach(node => node.parentNode.removeChild(node));

                document.getElementById('app').innerHTML = doc.body.innerHTML;
            }
        }
}
init()


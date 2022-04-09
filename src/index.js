import {helloLog, add} from "./common/util";
import "./style/resetStyle.css"


const helloText = helloLog();
const calcu = add(2,3);

document.getElementById('app').innerText = "개발 환경 처음부터 셋팅하기 " +  calcu;
console.log(`🚀 calcu =================>`, calcu);

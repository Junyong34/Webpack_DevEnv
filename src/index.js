import {helloLog, add} from "./common/util";
import "./style/resetStyle.css"
import chartImg from './image/apple-touch-icon.png'
import List from "./List";

const helloText = helloLog();
const calcu = add(2,3);
const imgEl = `<img src="${chartImg}" alt='chart' />`

const users = [
    {
        id: 1,
        name: "블랙 위도우",
    },
    {
        id: 2,
        name: "아이언맨",
    },
    {
        id: 3,
        name: "헐크",
    },
    {
        id: 4,
        name: "스파이더맨",
    },
    {
        id: 5,
        name: "캡틴 아메리카",
    },
];

document.getElementById("app").appendChild(List({ userList: users }));



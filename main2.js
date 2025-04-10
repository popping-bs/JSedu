//main.js
import  {add, subtract} from './utils.js';
import {PI, E} from "./constants.js";
import {person} from "./person.js";
 
document.getElementById("div1").innerHTML = `
        <ul>
        <li>person.name: ${person.name}</li>
        <li>person.age: ${person.age}</li>
        <li>add(2, 3): ${add(2, 3)}</li>
        <li>subtract(5, 3): ${subtract(5, 3)}</li>
        <li>PI: ${PI}</li>
        <li>E: ${E}</li>
     </ul>`;

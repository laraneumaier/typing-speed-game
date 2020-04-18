import {time,addTime} from "./time";
import { plusScore } from "./score";

const programmingWords : string[] = [
    "algorithm",
    "flowchart",
    "output",
    "parameter",
    "debugger",
    "validation",
    "operators",
    "procedure",
    "loop",
    "indentation",
    "ascii",
    "code",
    "object-oriented",
    "declaration",
    "expression",
    "hardcode",
    "iteration",
    "null",
    "pointer",
    "runtime"
]

export function showWord()  {
    if (randomword === undefined){
        createWord(); 
    }
}
const word:HTMLParagraphElement = document.createElement("p");
let randomword:string;

function createWord ():string {
    let randomnumber:number = (Math.floor(Math.random() * 19)); // random number from 0 till 19
    let wordspan: HTMLSpanElement = document.getElementById("random")!; 
    randomword = word.innerHTML = programmingWords[randomnumber];
    wordspan.appendChild(word);
    return randomword; 
}

export function check ():boolean {
    const textEl = document.querySelector<HTMLInputElement>('input')!;
    if (randomword === textEl.value){
        textEl.value = "";
        createWord ();
        addTime();
        return true;
        
    }else {
        return false;
    }
}




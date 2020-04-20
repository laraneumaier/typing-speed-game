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
const textEl = document.querySelector<HTMLInputElement>('input')!;

export function showWord()  {
    textEl.style.visibility = "visible";
        createWord(); 
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
    if (randomword === textEl.value){
        textEl.value = "";
        createWord ();
        addTime();
        plusScore(+1);
        return true;
        
    }else {
        return false;
    }
}

export function inputStop (): void {
    word.innerHTML = "";
    textEl.value = "";
    textEl.style.visibility = "hidden";
}

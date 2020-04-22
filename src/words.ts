import {addTime} from "./time";
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

// show the new word 
export function showWord()  {
    textEl.style.visibility = "visible";
        createWord(); 
}

const word:HTMLParagraphElement = document.createElement("p");
let randomword:string;

// create a new word 
function createWord ():string {
    let randomnumber:number = (Math.floor(Math.random() * 19)); // random number from 0 till 19
    let wordspan: HTMLSpanElement = document.getElementById("random")!; 
    randomword = word.innerHTML = programmingWords[randomnumber];
    wordspan.appendChild(word);
    return randomword; 
}

// if the user input is correct, a new word is shown and he gets more time
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

// makes the random word and user input invisible 
export function inputStop (): void {
    word.innerHTML = "";
    textEl.value = "";
    textEl.style.visibility = "hidden";
}

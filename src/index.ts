// import { helloWorld, Beispiel } from './myModule';
// import { alertMe } from './myOtherModule';

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

export function showWord (): void{
    let randomnumber:number = (Math.floor(Math.random() * 19)); // random number from 0 till 19
    let word = document.createElement("p");
    let wordspan: HTMLElement | null = document.getElementById("random");
    word.innerHTML = programmingWords[randomnumber];
    wordspan!.appendChild(word);
}

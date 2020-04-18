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
export var randomword:string;
export function showWord()  {
    if (randomword === undefined){
        let randomnumber:number = (Math.floor(Math.random() * 19)); // random number from 0 till 19
        let word: HTMLParagraphElement = document.createElement("p");
        let wordspan: HTMLElement | null = document.getElementById("random");
        randomword = word.innerHTML = programmingWords[randomnumber];
        wordspan!.appendChild(word);
        return randomword;
    }
}

export function input (){
    const textEl = document.querySelector<HTMLInputElement>('input')!;
    if (randomword === textEl.value){
        ;
    }
}

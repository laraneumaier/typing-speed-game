import { score } from "./score";
import { word, textEl } from "./words";
import { showStartButton } from "./startButton";


export function gameOver (){
    showStartButton();
    word.innerHTML= String(score)
    textEl.style.visibility ="hidden";
}
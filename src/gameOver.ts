import { inputStop } from "./words";
import { showStartButton } from "./startButton";
import { showHighScore } from "./score";

export function gameOver (){
    inputStop();
    showStartButton();
    showHighScore();
}
import { inputStop } from "./words";
import { showStartButton } from "./startButton";
import { showHighScore, scoreStars } from "./score";

export function gameOver (){
    inputStop();
    showStartButton();
    scoreStars();
    showHighScore();
}

import { showWord, check} from "./words";
import  { time } from "./time"
import { startScore } from "./score";
import { deletStartButton } from "./startButton";

// is called, when the start button is clicked
export function start (){
        startScore();
        deletStartButton();
        showWord();
        time();
}

// is called. when some starts to input something in the input field
export function inputStart(){
    check();
}


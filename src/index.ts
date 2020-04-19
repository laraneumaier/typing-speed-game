
import { showWord, check} from "./words";
import  { time } from "./time"
import { showScore } from "./score";
import { deletStartButton } from "./startButton";

export function start (){
        deletStartButton();
        showWord();
        time();
}

export function inputStart(){
    check();
}


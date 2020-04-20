
import { showWord, check} from "./words";
import  { time } from "./time"
import { startScore } from "./score";
import { deletStartButton } from "./startButton";

export function start (){
        startScore();
        deletStartButton();
        showWord();
        time();
}

export function inputStart(){
    check();
}


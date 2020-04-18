
import { showWord, check} from "./words";
import  { time } from "./time"
import { showScore } from "./score";



export function start (){
        showWord();
        time();
        showScore();
}

export function inputStart(){
    check();
}


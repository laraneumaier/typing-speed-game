
import { showWord } from "./myModule";

var counter = 10;
export var countdown = setInterval(function(){
    if(counter <= 0){
        clearInterval(countdown);
        alert("FINISH");
    }
    else{
        console.log(counter);
        counter -= 1;
    }
}, 1000);
    



export function timeCounter (){
    var time:number = 1000;
    const timeIntervall = setInterval(showWord, time);
    clearInterval(timeIntervall);
    console.log("es ist vorbei");
    }



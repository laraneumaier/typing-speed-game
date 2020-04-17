
import { showWord } from "./myModule";

let counter:number = 10;
export const countdown = setInterval( () => {
    if(counter < 0){
        clearInterval(countdown);
        alert("FINISH");
    } else{
        const showTime: HTMLSpanElement | null  = document.getElementById("countdown");
        showTime!.innerHTML = counter + " seconds";
        counter -= 1;
    }
}, 1000); 
    



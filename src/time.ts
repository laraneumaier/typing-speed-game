import { showWord, input } from "./words";

let counter: number = 10;

export function time(){
    const countdown = setInterval( () => {
        if(counter < 0){
            clearInterval(countdown);
            alert("FINISH");
        } else if (input() === true){
            counter += 2;
        }else{
            const showTime: HTMLSpanElement = document.getElementById("countdown")!;
            showTime.innerHTML = counter + " seconds";
            counter -= 1; 
        }
    }, 1000); 
} 

import { gameOver } from "./gameOver";

var counter:number;
const showTime: HTMLSpanElement = document.getElementById("countdown")!;

// every second the countdown is reduced by one
export function time(){
    counter = 10;
    let countdown= setInterval( () => {
            counter -= 1;
            showTime.innerHTML = counter + " seconds";
            if (counter <= 0){
                clearInterval(countdown);
                showTime.innerHTML = ""; 
                gameOver();
            }
    }, 1000); 
} 

// add time to the current time
export function addTime (){
    counter += 3;
    showTime.innerHTML = counter + " seconds";
}

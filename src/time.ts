import { check } from "./words";
import { showResultScore } from "./score";

let actuellCounter:number;
var counter:number;
const showTime: HTMLSpanElement = document.getElementById("countdown")!;
export function time(){
    counter = 10;
    let countdown = setInterval( () => { 
            counter -= 1;
            showTime.innerHTML = counter + " seconds";
            if (counter <= 0){
                clearInterval(countdown);
                showResultScore();               
            }
    }, 1000); 
} 

export function addTime (){
    counter += 3;
    showTime.innerHTML = counter + " seconds";
}

import { check } from "./words";

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
                console.log("finish");                
            }
    }, 1000); 
} 

export function addTime (){
    counter += 5;
    showTime.innerHTML = counter + " seconds";
}

import { Circle } from "./circleCanvas";
import { Eyes } from "./eyes";
import { Mouth } from "./mouth";


let score: number;
let result: number;
const scoreInput: HTMLElement = document.getElementById("score")!;
const highScoreInput = document.createElement("p");
let highScore:number = 0;

// shows the score while playing the game
export function startScore (){
    scoreInput.classList.add("score");
    score = 0;
    scoreInput.innerHTML = "Score: " + score;
}
export function plusScore(n:number){
    showScore(score +=n);
}
export function showScore (n:number){ 
    scoreInput.innerHTML = "Score: " + String(score);
    return score;
}

// shows a reaction to your score 
export function scoreStars (){
    let canvas = <HTMLCanvasElement>document.createElement("CANVAS");
    canvas.width=90;
    canvas.height=90;
    let feedbackText: HTMLParagraphElement = document.createElement("p");
    let canvasContext: CanvasRenderingContext2D | null = canvas!.getContext('2d');
    feedbackText.style.color = "#f1f1f1";
     if (score < parseInt(localStorage.getItem("Highscore")!)){
         let circle = new Circle (45,45,40,"#f1f1f1");
         let eyes = new Eyes(30,35,5,"#f1f1f1");
         let mouth = new Mouth(45,60,15,"#f1f1f1",true);
         circle.draw(canvasContext!);    
         eyes.draw(canvasContext!);
         mouth.draw(canvasContext!);
         feedbackText.innerHTML = "Try again!"
     } else if ( score === parseInt(localStorage.getItem("Highscore")!)){
         feedbackText.innerHTML = "Close!";
         canvas.style.display = "none";
     } else if (score > parseInt(localStorage.getItem("Highscore")!)){
         let circle = new Circle (45,45,40,"#f1f1f1");
         let eyes = new Eyes(30,35,5,"#f1f1f1");
         let mouth = new Mouth(45,50,13,"#f1f1f1",false);
         circle.draw(canvasContext!);    
         eyes.draw(canvasContext!);
         mouth.draw(canvasContext!);
        feedbackText.innerHTML = "New Highscore!"
     }else{
         console.log("error");
         
     }
     scoreInput.appendChild(highScoreInput);
     scoreInput.appendChild(canvas);
     scoreInput.appendChild(feedbackText);
 }
 
// shows the score and the highscore
export function showHighScore(){
    if(localStorage.getItem("Highscore")){ 
        if(score > parseInt(localStorage.getItem("Highscore")!)){ //will never be null
            highScore = score;
            highScoreInput.innerHTML = "Highscore: " + String(highScore);
            localStorage.setItem("Highscore", highScore.toString());
        } else{
            highScoreInput.innerHTML = "Highscore: " + localStorage.getItem("Highscore");
        }
    } else{
        highScore = score;
        highScoreInput.innerHTML = "Highscore: " + String(highScore);
        localStorage.setItem("Highscore", highScore.toString());
    }
    scoreInput.classList.remove("score");
    return parseInt(localStorage.getItem("Highscore")!);  
}



import { Center } from "./circleCanvas";

let score: number;
let result: number;
const scoreInput: HTMLElement = document.getElementById("score")!;
const highScoreInput = document.createElement("p");
let highScore:number = 0;


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

function scoreStars (){
   let  canvas = <HTMLCanvasElement>document.createElement("CANVAS");
   let canvasContext: CanvasRenderingContext2D | null = canvas!.getContext('2d')
    if (score > 0 && score <= 10){
        let flower = new Center(30,30,"red");
        flower.draw(canvasContext!);
    } else if (score > 10 && score <= 50){
        console.log("ganz gut")
    } else if (score > 50 && score <= 100){
        console.log("blabla");
    } else if(score > 100 && score <= 200){
        console.log("gut");
    } else if(score > 200){
        console.log("sieger");
    }else{
        console.log("try again");
    }
    highScoreInput.appendChild(canvas);
}


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
    scoreInput.appendChild(highScoreInput);
    scoreInput.classList.remove("score");
    scoreStars();
    return parseInt(localStorage.getItem("Highscore")!);  
}


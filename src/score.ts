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
    return parseInt(localStorage.getItem("Highscore")!);  
}


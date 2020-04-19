let score: number = 0;
let result: number;
export function plusScore(n:number){
    showScore(score +=n);
}
export function showScore (n:number):number { 
    let scoreInput = document.getElementById("score")!;
    scoreInput.innerHTML = "Score: " + String(score);
    return score;
}

export function showResultScore (){
    console.log (score);
}
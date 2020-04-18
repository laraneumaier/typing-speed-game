export function showScore (){
    let score: number = 0; 
    let scoreInput = document.getElementById("score")!;
    scoreInput.innerHTML = String(score);
}
const buttonStart = (<HTMLElement>document.querySelector('.button-start'));
export function showStartButton (){
    buttonStart.style.display = "block";
}

export function deletStartButton (){
    buttonStart.style.display="none";
}
const buttonStart = (<HTMLElement>document.querySelector('.button-start'));

// shows the start button
export function showStartButton (){
    buttonStart.style.display = "block";
}

// delets the start button 
export function deletStartButton (){
    buttonStart.style.display="none";
}

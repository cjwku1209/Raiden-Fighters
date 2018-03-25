function countdown() {
    timeRemaining--;

    if(timeRemaining > 0){
        $("#time-value").text(timeRemaining);
        setTimeout(countdown, 1000);
    }
    else {
        gameOver();
    }
}

function gameOver(){

}

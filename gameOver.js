function restart(){
    //Transition effect
    $("#gameOver").fadeOut(300);
    $("#time-value").text(300);
    timeRemaining = parseInt($("#time-value").text());
    health = 4;
    score = 0;
    clearTimeout(timerTimeout);

    for(var i = 1; i <=4 ; i++){
        $("#heart" + i).show();
    }

    //Wait until the effect is shown
    setTimeout(function(){
        $("#gameOver").css("display","none");
        $("#main").css("display","block");
    }, 250);
}



function gameOver(){
    $("#game-over-score-value").text($("#score-value").text());
    $("#main").fadeOut(300);
    setTimeout(function(){
        $("#main").css("display","none");
        $("#gameOver").css("display","block");
    }, 250);
}
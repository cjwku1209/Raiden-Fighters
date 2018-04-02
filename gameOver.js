function restart(){
    console.log("restart clicked");
    //Transition effect
    $("#gameOver").fadeOut(300);
    $("#time-value").text(1);
    timeRemaining = parseInt($("#time-value").text());

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
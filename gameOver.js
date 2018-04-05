function restart(){
    //Transition effect
    $("#gameOver").fadeOut(300);
    $("#time-value").text(300);
    $("#score-value").text(0);
    timeRemaining = parseInt($("#time-value").text());
    health = 4;
    score = 0;
    clearTimeout(timerTimeout);
    clearTimeout(blinkTimeout);

    for(var i = 1; i <=4 ; i++){
        $("#heart" + i).show();
    }
	for(var i = 1; i <=8 ; i++){
		$("#boss-heart-" + i).hide();
	}
	$('#boss').hide();
	bossLevel = false;
	boolLaser = false;
	boolRapidFire = false;
	win = false;
	blinkCount = 6;
	bossHealth = 8;

    $("#win-text").hide();
	$('#bossAttack').hide();
	$('#bossAttack').css("animationPlayState", "paused");
    $('#player').show();
	$('#enemy-type1-1').css("animationPlayState", "paused");
	$('#enemy-type1-1').css("display", "none");
    $('#enemy-type1-2').css("animationPlayState", "paused");
	$('#enemy-type1-2').css("display", "none");
	$('#enemy-type1-3').css("animationPlayState", "paused");
	$('#enemy-type1-3').css("display", "none");
	$('#meteor1').css("animationPlayState", "paused");
	$('#meteor1').css("display", "none");
	$('#meteor2').css("animationPlayState", "paused");
	$('#meteor2').css("display", "none");
	$('#meteor3').css("animationPlayState", "paused");
	$('#meteor3').css("display", "none");
	$('#bomb1-1').css("animationPlayState", "paused");
	$('#bomb1-1').css("display", "none");
	$('#bomb1-2').css("animationPlayState", "paused");
	$('#bomb1-2').css("display", "none");
	$('#bomb1-3').css("animationPlayState", "paused");
	$('#bomb1-3').css("display", "none");
	$('#space-bomb').css("animationPlayState", "paused");
	$('#space-bomb').css("display", "none");
	$('#player').css('transform', 'translate(0px, 0px)');
	x=0;
	y=0;
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
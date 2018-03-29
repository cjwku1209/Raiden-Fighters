var timeRemaining = 300;
var cssRule;

function countdown() {
	// Decrease the remaining time
	timeRemaining--;

	// Continue the countdown if there is still time
	if (timeRemaining > 0) {
		$("#time-value").text(timeRemaining);
		setTimeout(countdown, 1000);
	}

	// Start the game when the time is up
	else {
		$("#countdown").text("Start");
		gameOver();
	}
}

function shoot() {
	$('#left-bullet').css("animationPlayState", "running");

}

function bulletFrameChange(x, y) {
	var styles = document.getElementById('bullet-style');
	var str = "@keyframes bullet-animation { from { transform: translate(" + x + "px, " + y + "px);}" + " to { transform: translate(" + x + "px, -430px);}}";
	styles.innerText= str;
}


function gameOver(){

}


$(document).ready(function() {
	var x = 0;
	var y = 0;
	$('#start-button').click(function() {
		start();
		setTimeout(countdown, 1000);
	});
	$("#left-bullet").on("animationiteration", function() {
		$("#left-bullet").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});
	$("#right-bullet").on("animationiteration", function() {
		$("#right-bullet").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});
	window.addEventListener('keydown', function (e) {
		console.log(e.keyCode);
		switch (e.keyCode) {
			case 32:	//space
				var bulletY = $("#right-bullet").css("transform");
				bulletY = parseFloat(bulletY.split(" ")[5]);
				if(isNaN(bulletY)){
					bulletFrameChange(x,y);
					$('#left-bullet').css("display", "block");
					$('#right-bullet').css("display", "block");
					$('#left-bullet').css('animationPlayState', 'running');
					$('#right-bullet').css('animationPlayState', 'running');
					shoot();
				}
				break;
			case 37:	//left
				if(x <= -150){
					x= -150;
				}
				else{
					x-= 10;
				}
				break;
			case 38://up
				if(y <= -430){
					y=-430;
				}
				else{
					y-=10;
				}
				break;
			case 39://right
				if(x >= 150){
					x= 150;
				}
				else{
					x+= 10;
				}
				break;
			case 40://down
				if(y>=0){
					y=0;
				}
				else{
					y+=10;
				}
				break;
		}
		$('#player').css('transform', 'translate(' + x +'px,'+ y +'px)');
	});

});
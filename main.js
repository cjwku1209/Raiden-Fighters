var timeRemaining = 300;
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

function gameOver(){

}

$(document).ready(function() {
	$('#start-button').click(function() {
		start();
		setTimeout(countdown, 1000);
	});

});
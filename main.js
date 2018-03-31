var timeRemaining = 300;
var boolLaser = false;
var boolRapidFire = false;

function countdown() {
    // Decrease the remaining time
    timeRemaining--;

    // Continue the countdown if there is still time
    if (timeRemaining > 0) {
        $("#time-value").text(timeRemaining);
        setTimeout(countdown, 1000);
    }

    // Game over when the time is up
    else {
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

function laserFrameChange(x, y) {
    var styles = document.getElementById('laser-style');
    var str = "@keyframes laser-animation { from { transform: translate(" + x + "px, " + y + "px);}" + " to { transform: translate(" + x + "px, -430px);}}";
    styles.innerText= str;
}

function generateEnemyTypeOne(){
	var y1 = Math.round(Math.random()*-230)-120;
	var y2 = Math.round(y1 + 120);
	var styles = document.getElementById('enemy-type1-style');
	var str = "@keyframes enemy-type1-animation { from { transform: translate(205px, " + y1 + "px);}" + " to { transform: translate(-345px, " + y2 +"px);}}";
	styles.innerText= str;
}

function randomEnemyTypeGenerator(){
	var typeNum = Math.floor(Math.random() * (3)) + 1;
	switch (typeNum){
		case 1:
			generateEnemyTypeOne();
			$('#enemy-type1-1').css("display", "block");
			$('#enemy-type1-2').css("display", "block");
			$('#enemy-type1-3').css("display", "block");
			$('#enemy-type1-1').css('animationPlayState', 'running');
			$('#enemy-type1-2').css('animationPlayState', 'running');
			$('#enemy-type1-3').css('animationPlayState', 'running');
			enemyTypeOneDropBomb();
			break;
		case 2:
			break;
		case 3:
			break;
	}
}

function enemyTypeOneDropBomb() {
	if(isNaN(parseFloat($('#bomb1-1').css("transform").split(" ")[5]))){
		$('#bomb1-1').css("display", "block");
		$('#bomb1-1').css('animationPlayState', 'running');
	}
	if(isNaN(parseFloat($('#bomb1-2').css("transform").split(" ")[5]))){
		$('#bomb1-2').css("display", "block");
		$('#bomb1-2').css('animationPlayState', 'running');

	}
	if(isNaN(parseFloat($('#bomb1-3').css("transform").split(" ")[5]))){
		$('#bomb1-3').css("display", "block");
		$('#bomb1-3').css('animationPlayState', 'running');
	}

}

function gameOver(){

}


$(document).ready(function() {
	randomEnemyTypeGenerator();
	setInterval(randomEnemyTypeGenerator, 6000);
    var x = 0;
    var y = 0;

	var dropSecond = Math.floor(Math.random() * (3)) + 1;
	setTimeout(enemyTypeOneDropBomb(), dropSecond);

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

    $("#laser").on("animationiteration", function() {
        $("#laser").css({
            "animationPlayState": "paused",
            'display': 'none'
        });
    });

	$("#enemy-type1-1").on("animationiteration", function() {
		$("#enemy-type1-1").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

	$("#enemy-type1-2").on("animationiteration", function() {
		$("#enemy-type1-2").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

	$("#enemy-type1-3").on("animationiteration", function() {
		$("#enemy-type1-3").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

	$("#bomb1-1").on("animationiteration", function() {
		$("#bomb1-1").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

	$("#bomb1-2").on("animationiteration", function() {
		$("#bomb1-2").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

	$("#bomb1-3").on("animationiteration", function() {
		$("#bomb1-3").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

    window.addEventListener('keydown', function (e) {
        // console.log(e.keyCode);
        switch (e.keyCode) {
            case 32:	//space
				var shootYcor = $("#right-bullet").css("transform");
				shootYcor = parseFloat(shootYcor.split(" ")[5]);
				var laserYcor = $("#laser").css("transform");
				laserYcor = parseFloat(laserYcor.split(" ")[5]);
				var animationDuration = (430+y)/430;
                if(boolRapidFire == true){
					$("#right-bullet").css("animationDuration", animationDuration + "s");
                    $("#left-bullet").css("animationDuration", animationDuration + "s");
                }
                else{
					animationDuration=animationDuration*2;
					$("#right-bullet").css("animationDuration", animationDuration + "s");
					$("#left-bullet").css("animationDuration", animationDuration + "s");
                }

                if(isNaN(shootYcor) && boolLaser == false){
                    bulletFrameChange(x,y);
                    $('#left-bullet').css("display", "block");
                    $('#right-bullet').css("display", "block");
                    $('#left-bullet').css('animationPlayState', 'running');
                    $('#right-bullet').css('animationPlayState', 'running');
                    shoot();
                }
                else if (isNaN(laserYcor) && boolLaser == true){
                    laserFrameChange(x,y);
                    animationDuration =(430+y)/430 * 1.2;
					$("#laser").css("animationDuration", animationDuration + "s");
                    $('#laser').css("display", "block");
                    $('#laser').css('animationPlayState', 'running');
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
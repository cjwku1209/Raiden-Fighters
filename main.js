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

function generateEnemyTypeTwo() {
	var x1 = Math.round(Math.random()*300)-150;
	var x2 = Math.round(Math.random()*300)-150;
	var x3 = Math.round(Math.random()*300)-150;
	var styles1 = document.getElementById('meteor-style1');
	var str1 = "@keyframes meteor1-animation { from { transform: translate(" + x1 + "px, -500px);}" + " to { transform: translate(" + x1 +"px , 0px);}}";
	styles1.innerText= str1;
	var styles2 = document.getElementById('meteor-style2');
	var str2 = "@keyframes meteor2-animation { from { transform: translate(" + x2 + "px, -500px);}" + " to { transform: translate(" + x2 +"px , 0px);}}";
	styles2.innerText= str2;
	var styles3 = document.getElementById('meteor-style3');
	var str3 = "@keyframes meteor3-animation{ from { transform: translate(" + x3 + "px, -500px);}" + " to { transform: translate(" + x3 +"px , 0px);}}";
	styles3.innerText= str3;

}

function randomEnemyTypeGenerator(){
	var typeNum = Math.floor(Math.random() * (3)) + 1;
	console.log(typeNum);
	switch (typeNum){
		case 1:
			generateEnemyTypeOne();
			$('#enemy-type1-1').css("display", "block");
			$('#enemy-type1-2').css("display", "block");
			$('#enemy-type1-3').css("display", "block");
			$('#enemy-type1-1').css('animationPlayState', 'running');
			$('#enemy-type1-2').css('animationPlayState', 'running');
			$('#enemy-type1-3').css('animationPlayState', 'running');
			// enemyTypeOneDropBomb();
			break;
		case 2:
			generateEnemyTypeTwo();
			$('#meteor1').css("display", "block");
			$('#meteor2').css("display", "block");
			$('#meteor3').css("display", "block");
			$('#meteor1').css('animationPlayState', 'running');
			$('#meteor2').css('animationPlayState', 'running');
			$('#meteor3').css('animationPlayState', 'running');
			break;
		case 3:
			break;
	}
}

function enemyTypeOneDropBomb() {
	var styles = document.getElementById('bomb1-style');
	if($('#enemy-type1-1').css("animation-play-state")=="running" && $('#bomb1-1').css("animation-play-state")=="paused"){
		var bomb1X= parseFloat($('#enemy-type1-1').css("transform").split(" ")[4]);
		var bomb1Y= parseFloat($('#enemy-type1-1').css("transform").split(" ")[5]);
		var str = "@keyframes bomb1-animation { from { transform: translate(" + bomb1X + "px, " + bomb1Y + "px);}" + " to { transform: translate(" + bomb1X + "px, 0px);}}";
		styles.innerText= str;
		$('#bomb1-1').css("display", "block");
		$('#bomb1-1').css('animationPlayState', 'running');

	}
	if($('#enemy-type1-2').css("animation-play-state")=="running" && $('#bomb1-2').css("animation-play-state")=="paused"){
		var bomb2X= parseFloat($('#enemy-type1-2').css("transform").split(" ")[4]);
		var bomb2Y= parseFloat($('#enemy-type1-2').css("transform").split(" ")[5]);
		var str = "@keyframes bomb1-animation { from { transform: translate(" + bomb2X + "px, " + bomb2Y + "px);}" + " to { transform: translate(" + bomb2X + "px, 0px);}}";
		styles.innerText= str;

		$('#bomb1-2').css("display", "block");
		$('#bomb1-2').css('animationPlayState', 'running');

	}
	if($('#enemy-type1-3').css("animation-play-state")=="running" && $('#bomb1-3').css("animation-play-state")=="paused"){
		var bomb3X= parseFloat($('#enemy-type1-3').css("transform").split(" ")[4]);
		var bomb3Y= parseFloat($('#enemy-type1-3').css("transform").split(" ")[5]);
		var str = "@keyframes bomb1-animation { from { transform: translate(" + bomb3X + "px, " + bomb3Y + "px);}" + " to { transform: translate(" + bomb3X + "px, 0px);}}";
		styles.innerText= str;

		$('#bomb1-3').css("display", "block");
		$('#bomb1-3').css('animationPlayState', 'running');
	}

}

// function bossLevel() {
//
// }

function gameOver(){

}

function  mainGame() {
	// $('#enemy-type2-1').css('transform', 'translate(-40px, -400px)');
	randomEnemyTypeGenerator();
	setInterval(randomEnemyTypeGenerator, 6000);
	var dropSecond = (Math.floor(Math.random() * (3)) + 1)*500;
	setInterval(enemyTypeOneDropBomb, dropSecond);

}

$(document).ready(function() {
	var x = 0;
	var y = 0;
    $('#start-button').click(function() {
        start();
        setTimeout(countdown, 1000);
        mainGame();
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

	$("#meteor1").on("animationiteration", function() {
		$("#meteor1").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

	$("#meteor2").on("animationiteration", function() {
		$("#meteor2").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

	$("#meteor3").on("animationiteration", function() {
		$("#meteor3").css({
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
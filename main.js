var timeRemaining = 300;
var boolLaser = false;
var boolRapidFire = false;
var RapidFireTimeout;
var LaserTimeout;
var health = 4;
var timerTimeout;

// Timer
function countdown() {
    // Decrease the remaining time
    timeRemaining--;

    // Continue the countdown if there is still time
    if (timeRemaining >= 0) {
        $("#time-value").text(timeRemaining);
        timerTimeout = setTimeout(countdown, 1000);
    }

    // Game over when the time is up
    else {
        gameOver();
    }
}

// Bullet animation
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

// Generate random item
function randomFiringModeItemGenerator(){
    var typeNum = Math.floor(Math.random() * (2)) + 1;
    switch (typeNum){
        case 1:
            generateItemTypeOne();
            $('#laser-item').css("display", "block");
            $('#laser-item').css('animationPlayState', 'running');
            break;

        case 2:
            generateItemTypeTwo();
            $('#rapid-fire-item').css("display", "block");
            $('#rapid-fire-item').css('animationPlayState', 'running');
            break;
    }
}

function generateItemTypeOne(){
    var x = Math.round(Math.random()*300) - 150;
    var style = document.getElementById('laser-item-style');
    var str = "@keyframes laser-item-animation { from { transform: translate(" + x + "px, -459px);}" + " to { transform: translate(" + x +"px , 0px);}}";
    style.innerText= str;
}


function generateItemTypeTwo(){
    var x = Math.round(Math.random()*300) - 150;
    var style = document.getElementById('rapid-fire-item-style');
    var str = "@keyframes rapid-fire-item-animation { from { transform: translate(" + x + "px, -450px);}" + " to { transform: translate(" + x +"px , 0px);}}";
    style.innerText= str;
}

// Generate random enemy
function randomEnemyTypeGenerator(){
    //var typeNum = Math.floor(Math.random() * (3)) + 1;
    var typeNum = 1;
    switch (typeNum){
        case 1:
            generateEnemyTypeOne();
            $('#enemy-type1-1').css("display", "block");
            $('#enemy-type1-2').css("display", "block");
            $('#enemy-type1-3').css("display", "block");
            $('#enemy-type1-1').css('animationPlayState', 'running');
            $('#enemy-type1-2').css('animationPlayState', 'running');
            $('#enemy-type1-3').css('animationPlayState', 'running');
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
            generateEnemyTypeThree();
            $('#space-bomb').css("display", "block");
            $('#space-bomb').css('animationPlayState', 'running');
            break;
    }
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

function generateEnemyTypeThree() {
	var y1 = Math.round(Math.random()*-280);
	var y2 = Math.round(y1 - 120);
	var styles = document.getElementById('space-bomb-style');
	var str = "@keyframes space-bomb-animation { from { transform: translate(-200px, " + y1 + "px);}" + " to { transform: translate(200px, " + y2 +"px);}}";
	styles.innerText= str;
}

// Drop bomb animation
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

// Call when player crash with enemy
function loseHealth(enemyType){
    $("#" + enemyType).css("display", "none");
    $("#player").css("display", "none");
    setTimeout(function(){
        $("#player").css("display", "block");
    }, 300)
    $("#heart" + health).hide();
    health--;
    if (health <= 0){
        gameOver();
    }
}

// Check all elements interaction
function checkHit() {
	if($("#meteor1").css("animation-play-state") === "running"){
        var meteor1X = parseFloat($("#meteor1").css("transform").split(" ")[4]);
        var meteor1Y = parseFloat($("#meteor1").css("transform").split(" ")[5]);
        var meteor2X = parseFloat($("#meteor2").css("transform").split(" ")[4]);
        var meteor2Y = parseFloat($("#meteor2").css("transform").split(" ")[5]);
        var meteor3X = parseFloat($("#meteor3").css("transform").split(" ")[4]);
        var meteor3Y = parseFloat($("#meteor3").css("transform").split(" ")[5]);
    	checkBulletHitMeteor(boolLaser, meteor1X, meteor1Y, meteor2X, meteor2Y, meteor3X, meteor3Y);
    	checkMeteorHitPlayer(meteor1X, meteor1Y, meteor2X, meteor2Y, meteor3X, meteor3Y);
	}else if ($("#space-bomb").css("animation-play-state") === "running"){
        var spaceX = parseFloat($("#space-bomb").css("transform").split(" ")[4]);
        var spaceY = parseFloat($("#space-bomb").css("transform").split(" ")[5]);
        checkBulletHitSpaceBomb(boolLaser, spaceX, spaceY);
        checkSpaceBombHitPlayer(spaceX, spaceY);

        //TODO: Not working for type one -- bomb1,2,3 have same X, Y coordinate
	}else if($("#enemy-type1-1").css("animation-play-state") === "running"){
		if($("#bomb1-1").css("animation-play-state") === "running"){
			var bomb1X = parseFloat($("#bomb1-1").css("transform").split(" ")[4]);
            var bomb1Y = parseFloat($("#bomb1-1").css("transform").split(" ")[5]);
			checkBombHitPlayer(1, bomb1X, bomb1Y);
		}
		if($("#bomb1-2").css("animation-play-state") === "running"){
            var bomb2X = parseFloat($("#bomb1-2").css("transform").split(" ")[4]);
            var bomb2Y = parseFloat($("#bomb1-2").css("transform").split(" ")[5]);
            checkBombHitPlayer(2, bomb2X, bomb2Y);
		}
        if($("#bomb1-3").css("animation-play-state") === "running"){
            var bomb3X = parseFloat($("#bomb1-3").css("transform").split(" ")[4]);
            var bomb3Y = parseFloat($("#bomb1-3").css("transform").split(" ")[5]);
            checkBombHitPlayer(3, bomb3X, bomb3Y);
        }
	}
}
// Check type 1 (bomb) crash with player
function checkBombHitPlayer(index, bombX, bombY){
    var playerX = getPlayerX();
    var playerY = getPlayerY();
    if($("#player").css("display") !== "none"){
    	console.log("index: " + index + " X: " + bombX + ", Y: " + bombY);
        if((playerX - 15) <= bombX && bombX <= (playerX + 15) && (playerY - 40) <= bombY && bombY <= (playerY) && $("#bomb1-" + index).css("display") !== "none"){
            loseHealth("bomb1-" + index);
        }
    }
}

// Check type 2 (meteor) crash with player
function checkMeteorHitPlayer(meteor1X, meteor1Y, meteor2X, meteor2Y, meteor3X, meteor3Y) {
	var playerX = getPlayerX();
    var playerY = getPlayerY();
    if($("#player").css("display") !== "none"){
		if((playerX - 30) <= meteor1X && meteor1X <= (playerX + 30) && (playerY - 40) <= meteor1Y && meteor1Y <= (playerY) && $("#meteor1").css("display") !== "none"){
            loseHealth("meteor1");
		}
		if((playerX - 30) <= meteor2X && meteor2X <= (playerX + 30) && (playerY - 40) <= meteor2Y && meteor2Y <= (playerY) && $("#meteor2").css("display") !== "none"){
            loseHealth("meteor2");
		}
        if((playerX - 30) <= meteor3X && meteor3X <= (playerX + 30) && (playerY - 40) <= meteor3Y && meteor3Y <= (playerY) && $("#meteor3").css("display") !== "none"){
            loseHealth("meteor3");
        }
    }
}

// Check bullet hit enemy type 2 (meteor)
function checkBulletHitMeteor(isLaser, meteor1X, meteor1Y, meteor2X, meteor2Y, meteor3X, meteor3Y){
    if(isLaser){
        var laserX = parseFloat($("#laser").css("transform").split(" ")[4]);
        var laserY = parseFloat($("#laser").css("transform").split(" ")[5]);
        if((meteor1X - 30) <= laserX && laserX <= (meteor1X + 30) && (meteor1Y + 100) >= laserY && $("#meteor1").css("display") !== "none"){
            $("#meteor1").css("display", "none");
        }
        if((meteor2X - 30) <= laserX && laserX <= (meteor2X + 30) && (meteor2Y + 100) >= laserY  && $("#meteor2").css("display") !== "none"){
            $("#meteor2").css("display", "none");
        }
        if((meteor3X - 30) <= laserX && laserX <= (meteor3X + 30) && (meteor3Y + 100) >= laserY  && $("#meteor3").css("display") !== "none"){
            $("#meteor3").css("display", "none");
        }
    } else {
        var bulletX = parseFloat($("#right-bullet").css("transform").split(" ")[4]);
        var bulletY = parseFloat($("#right-bullet").css("transform").split(" ")[5]);
        if((meteor1X - 30) <= bulletX && bulletX <= (meteor1X + 30) && (meteor1Y + 70) >= bulletY && $("#meteor1").css("display") !== "none"){
            $("#meteor1").css("display", "none");
            $("#left-bullet").css("display", "none");
            $("#right-bullet").css("display", "none");
        }
        if((meteor2X - 30) <= bulletX && bulletX <= (meteor2X + 30) && (meteor2Y + 70) >= bulletY  && $("#meteor2").css("display") !== "none"){
            $("#meteor2").css("display", "none");
            $("#left-bullet").css("display", "none");
            $("#right-bullet").css("display", "none");
        }
        if((meteor3X - 30) <= bulletX && bulletX <= (meteor3X + 30) && (meteor3Y + 70) >= bulletY  && $("#meteor3").css("display") !== "none"){
            $("#meteor3").css("display", "none");
            $("#left-bullet").css("display", "none");
            $("#right-bullet").css("display", "none");
        }
    }
}

// Check type 3 (space bomb) crash with player
function checkSpaceBombHitPlayer(spaceX, spaceY){
    var playerX = getPlayerX();
    var playerY = getPlayerY();
    if($("#player").css("display") !== "none"){
        if((playerX - 30) <= spaceX && spaceX <= (playerX + 30) && (playerY - 60) <= spaceY && spaceY <= (playerY) && $("#space-bomb").css("display") !== "none"){
            loseHealth("space-bomb");
        }
    }
}

// Check bullet hit type 3 (space bomb)
function checkBulletHitSpaceBomb(isLaser, spaceX, spaceY){
    if(isLaser){
        var laserX = parseFloat($("#laser").css("transform").split(" ")[4]);
        var laserY = parseFloat($("#laser").css("transform").split(" ")[5]);
        if((spaceX - 40) <= laserX && laserX <= (spaceX + 30) && (spaceY + 40) >= laserY && laserY >= (spaceY - 40) && $("#space-bomb").css("display") !== "none"){
            $("#space-bomb").css("display", "none");
        }
    } else {
        var bulletX = parseFloat($("#right-bullet").css("transform").split(" ")[4]);
        var bulletY = parseFloat($("#right-bullet").css("transform").split(" ")[5]);
        if((spaceX - 40) <= bulletX && bulletX <= (spaceX + 30) && (spaceY + 30) >= bulletY && bulletY >= (spaceY - 40) && $("#space-bomb").css("display") !== "none"){
            $("#space-bomb").css("display", "none");
            $("#left-bullet").css("display", "none");
            $("#right-bullet").css("display", "none");
        }
    }
}

// Helper function to get X coordinate of player
function getPlayerX(){
	return (isNaN(parseFloat($("#player").css("transform").split(" ")[4])))? 0:parseFloat($("#player").css("transform").split(" ")[4]);
}

// Helper function to get Y coordinate of player
function getPlayerY() {
    return (isNaN(parseFloat($("#player").css("transform").split(" ")[5])))? 0:parseFloat($("#player").css("transform").split(" ")[5]);
}

// Check if player get the item
function checkItemHit(){
	var playerX = getPlayerX()
    var playerY = getPlayerY()
    var laserItemX = parseFloat($("#laser-item").css("transform").split(" ")[4]);
    var laserItemY = parseFloat($("#laser-item").css("transform").split(" ")[5]);
    var rapidX = parseFloat($("#rapid-fire-item").css("transform").split(" ")[4]);
    var rapidY = parseFloat($("#rapid-fire-item").css("transform").split(" ")[5]);

    if(!isNaN(laserItemX)){
    	if((playerX - 15) <= laserItemX && laserItemX <= (playerX + 15) && (playerY - 40) <= laserItemY && laserItemY <= (playerY)){
    		//console.log(playerY + " " + laserItemY + " got laser");
            $("#laser-item").css("display", "none");
            if(boolRapidFire){
            	boolRapidFire = false;
            	clearTimeout(RapidFireTimeout);
			}else if (boolLaser){
            	clearTimeout(LaserTimeout);
			}
			boolLaser = true;
            LaserTimeout = setTimeout(function(){
                boolLaser = false;
            }, 30000)
		}
	}else if(!isNaN(rapidX)){
        if((playerX - 15) <= rapidX && rapidX<= (playerX + 15) && (playerY - 40) <= rapidY && rapidY <= (playerY)){
            //console.log(playerY + " " + rapidY + " got rapid");
            $("#rapid-fire-item").css("display", "none");
            if(boolLaser){
            	boolLaser = false;
            	clearTimeout(LaserTimeout);
			}else if (boolRapidFire){
            	clearTimeout(RapidFireTimeout);
			}
			boolRapidFire = true;
			RapidFireTimeout = setTimeout(function(){
				boolRapidFire = false;
			}, 30000);

        }
	}
}


function  mainGame() {
	// $('#enemy-type2-1').css('transform', 'translate(-40px, -400px)');
	randomEnemyTypeGenerator();
    randomFiringModeItemGenerator();
	setInterval(randomEnemyTypeGenerator, 5000);
    setInterval(randomFiringModeItemGenerator, parseInt(Math.random()*30000) + 20000);
    setInterval(checkItemHit, 100);
    setInterval(checkHit, 100);
	var dropSecond = (Math.floor(Math.random() * (3)) + 1)*500;
	setInterval(enemyTypeOneDropBomb, dropSecond);
	//requestAnimationFrame(checkHit); // not working help check

}

$(document).ready(function() {
	var x = 0;
	var y = 0;
    $('#start-button').click(function() {
        start();
        setTimeout(countdown, 1000);
        mainGame();
    });

    $('#restart-button').click(function() {
        restart();
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

	$("#space-bomb").on("animationiteration", function() {
		$("#space-bomb").css({
			"animationPlayState": "paused",
			'display': 'none'
		});
	});

    $("#laser-item").on("animationiteration", function() {
        $("#laser-item").css({
            "animationPlayState": "paused",
            'display': 'none'
        });
    });

    $("#rapid-fire-item").on("animationiteration", function() {
        $("#rapid-fire-item").css({
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


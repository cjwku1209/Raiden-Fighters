function start(){
    //Transition effect
    startPageAudio.pause();
    gameplayAudio.load();
    gameplayAudio.play();

	if($('#start-Page').css("display") === 'block'){
		$("#start-Page").fadeOut(300);

		//Wait until the effect is shown
		setTimeout(function(){
			$("#start-Page").css("display","none");
			$("#main").css("display","block");
		}, 250);
	}
	else if($('#instruction-page').css("display") === 'block'){
		$("#instruction-page").fadeOut(300);

		//Wait until the effect is shown
		setTimeout(function(){
			$("#instruction-page").css("display","none");
			$("#main").css("display","block");
		}, 250);
	}

}

function instruction() {
	$("#start-Page").fadeOut(300);
	//Wait until the effect is shown
	setTimeout(function(){
		$("#start-Page").css("display","none");
		$("#instruction-page").css("display","block");
	}, 250);

}

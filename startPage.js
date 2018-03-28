function start(){
	console.log("clicked");
    $("#start-Page").fadeOut(300);
    setTimeout(function(){
        //do what you need here
        $("#start-Page").css("display","none");
        $("#main").css("display","block");
    }, 250);
    //$("#start-Page").css("display","none");
	// setTimeout(countdown, 1000);
}




function start(){
    //Transition effect
    $("#start-Page").fadeOut(300);

    //Wait until the effect is shown
    setTimeout(function(){
        $("#start-Page").css("display","none");
        $("#main").css("display","block");
    }, 250);
}

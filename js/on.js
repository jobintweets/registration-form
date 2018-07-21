$(function(){
    
    var flag = true;
    var imgname = "";
    $("#onoff").click(function(){
        if(flag){
            var imgname = "images/on.png";
            flag = false;
        }
        else{
            var imgname = "images/off.jpg";
            flag = true;
        }
        $('img').attr("src",imgname);
    });
    
    $("#btnshow").click(function(){
        $("randomtext").show();
    });
    $("#btnhide").click(function(){
        $("randomtext").hide();
    });
    $("#toggle").click(function(){
        $("randomtext").toggle();
    });
    $("#fadein").click(function(){
        $("box").fadeIn();
    });
    $("#fadeout").click(function(){
        $("box").fadeOut();
    });
});
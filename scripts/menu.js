;$(document).ready(function(){

    $(".menu_item").each(function(index){
        var isOlderIe = $.browser.msie && (parseInt($.browser.version,10) < 9);
        var speed = isOlderIe ? 0 : 500;
        $(this).hover(function(){
            if( index > 4 ){
                $(this).addClass("last_menu_item");
            }
            $(this)
                .find(".pop_menu")
                .addClass("mouse-in")
                .stop().fadeIn(speed,function(){
                    $(this).css({'opacity':1,'display':'block'});     // besure div show up.
                });
        },function(){
            $(this)
                .find(".pop_menu")
                .stop().fadeOut(speed/2)
                .removeClass("mouse-in","last_menu_item");
        });
    });

});

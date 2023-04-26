(function( $ ) {
    $(document).ready(function() {
        var jQuerycurtainopen = false;
            $(".rope").click(function(){
                $(this).blur();
                if (jQuerycurtainopen == false){ 
                    $(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
                    $(".leftcurtain").stop().animate({width:'0px'}, 2000 );
                    $(".rightcurtain").stop().animate({width:'0px'},2000 );
                    jQuerycurtainopen = true;
                }else{
                    $(this).stop().animate({top: '-40px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
                    $(".leftcurtain").stop().animate({width:'50%'}, 2000 );
                    $(".rightcurtain").stop().animate({width:'51%'}, 2000 );
                    jQuerycurtainopen = false;
                }
                return false;
            });
        });	
    })( jQuery );
    
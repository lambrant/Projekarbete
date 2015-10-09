$(document).ready(function() {
    
    //----------div that follows viewer when scrolling------
    
    var element = $("#goToTop");
    var originalY = element.offset().top;
    var topMargin = 450;
    
    $(window).on("scroll", function(event) {
        var scrollTop = $(window).scrollTop();
        
        element.stop(false, false).animate({
            top: scrollTop < originalY
                    ? 0
                    : scrollTop - originalY + topMargin
        }, 300);
    });
    
    $(window).scroll(function() {   //to top link appears when scrolled down 100px
        
        if ($(this).scrollTop() > 100) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });
    
    //----------click to get to top-------------------------
    
    $("a[href='#top']").click(function() {
        
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
    });
  
    $("a[href='#mobileTop']").click(function() {
          
       $("html, body").animate({ scrollTop: 0 }, "slow");
       return false;
    });
  
});
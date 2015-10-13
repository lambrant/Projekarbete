$(document).ready(function() {
    
    //----------div that follows viewer when scrolling------
    
    $(window).on("scroll", function(event) {
        
        $("#goToTop").css({position: "fixed",
                            backgroundColor: "black",
                            width: "80px",
                            marginTop: "450px"});
        
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
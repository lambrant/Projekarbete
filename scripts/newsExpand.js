$(document).ready(function() {
    
   $(".expand").click(function() {
       
       var val = $(this).text();
       
       if (val === "More..") {
           
           $(".newsParagraph").css("height", "150px");
           $(this).text("Less..");
           
       } else {
           
           $(".newsParagraph").css("height", "80px");
           $(this).text("More..");
       }
       return false;
   });
});
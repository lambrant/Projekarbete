$(document).ready(function() {
    
    $("#news1").click(function() {
       
       var val = $(this).text();
       
       if (val === "More..") {
           
           $("#newsParagraph1").css("height", "100%");
           $(this).text("Less..");
           
       } else {
           
           $("#newsParagraph1").css("height", "80px");
           $(this).text("More..");
       }
       return false;
   });
   $("#news2").click(function() {
       
       var val = $(this).text();
       
       if (val === "More..") {
           
           $("#newsParagraph2").css("height", "100%");
           $(this).text("Less..");
           
       } else {
           
           $("#newsParagraph2").css("height", "80px");
           $(this).text("More..");
       }
       return false;
   });
   $("#news3").click(function() {
       
       var val = $(this).text();
       
       if (val === "More..") {
           
           $("#newsParagraph3").css("height", "100%");
           $(this).text("Less..");
           
       } else {
           
           $("#newsParagraph3").css("height", "80px");
           $(this).text("More..");
       }
       return false;
   });
   $("#news4").click(function() {
       
       var val = $(this).text();
       
       if (val === "More..") {
           
           $("#newsParagraph4").css("height", "100%");
           $(this).text("Less..");
           
       } else {
           
           $("#newsParagraph4").css("height", "80px");
           $(this).text("More..");
       }
       return false;
   });

});
    
//   $(".expand").click(function() {
       
//       var val = $(this).text();
       
//       if (val === "More..") {
           
//           $(".newsParagraph").css("height", "100%");
//           $(this).text("Less..");
           
//       } else {
           
//           $(".newsParagraph").css("height", "80px");
//           $(this).text("More..");
//       }
//       return false;
//   });
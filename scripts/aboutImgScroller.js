$(document).ready(function() {
    
    var img;
    
   function HorizontalImgScroll() {
       
        img = $("#ingameImg").first();
        img.animate({width:0},2500,'linear',function(){
          img.remove();
          $("#imgHolder").append(img);
          HorizontalImgScroll();
        });
       
   }
});
var dropMenuClicker = document.getElementById("dropMenuLogo");
var dropMenu = document.getElementById("dropMenu");
dropMenu.style.display = "none";
dropMenuClicker.onclick = function()
{
    if(dropMenu.style.display  === "none")
    {
        dropMenu.style.display = "block";
        // console.log("Case1");        
    } else
    {
        dropMenu.style.display = "none";
        // console.log("Case2"); 
    }
}
var dropMenuClicker = document.getElementById("dropMenuLogo");
var dropMenu = document.getElementById("dropMenu")
dropMenuClicker.onclick = function()
{
    console.log(dropMenu);
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
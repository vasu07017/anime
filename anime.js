var hi=document.querySelectorAll(".a").length;
for(var i=0;i<hi;i++)
{
    document.querySelectorAll(".a")[i].addEventListener("click",sou);
}

function sou()
{
var inp=this.innerHTML;
switch(inp){
    case "naruto uzumaki":
        var audio= new Audio("naruto.mp3");
        audio.play();
        break;
        
        case "sasuke":
            var audio= new Audio("sasuke.mp3");
            audio.play();
        break;

    case "pain":
    var audio= new Audio(".mp3");
    audio.play();
        break;
        case "madara":
            var audio= new Audio("Yamete Kudasai.wav");
            audio.play();
        break;
        case "obito":
            var audio= new Audio("Ahh.wav");
            audio.play();
        break;
            }



}
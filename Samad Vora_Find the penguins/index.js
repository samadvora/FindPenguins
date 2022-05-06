$(document).ready(function () {
var c = 0;
var h = 0;
$("#score").html('Score : '+c+'<br> High Score : '+h);
$("#yeti").mousedown(function () {
alert("Yaaaarrrr!");
} );
RandomImage();

$(".Penguins").on('click', function () {  
 c = c + 1;
var num = $(this).attr('id');
var Char = num.substr(num.length - 1);
if ($(this).hasClass("Penguins yeti"))
{  
$(this).css('background-image', 'url(images/yeti.png)');
alert("GameOver ! Its Yetiiit");
h = c;
$("#score").html('Score: '+c+'<br> High Score : '+ h);
location.reload();
}
else
{
$(this).css('background-image', 'url(images/penguin_' + Char + '.png)');  
$("#score").html('Score : '+c+'<br> High Score : '+h);
    
}
if(c==8)
{            
alert("congratulation you have won the game");
}
});
function RandomImage() {
 var n = Math.floor(Math.random() * 9);
$("#penguin" + n).addClass('yeti');
$("#penguin" + n).attr('id', 'yeti');   
}
});
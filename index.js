$(document).ready(function () {
    var c = 0;
    var h = 0;
    $("#score").html('Score : ' + c + '<br> High Score : ' + h);
    
    $("#startButton").click(function() {
        RandomImage();
        $("#startButton").hide(); // Hide the start button after starting the game
    });

    $(".Penguins").on('click', function () {
        c++;
        var num = $(this).attr('id');
        var Char = num.substr(num.length - 1);
        
        if ($(this).hasClass("yeti")) {
            $(this).css('background-image', 'url(images/yeti.png)');
            alert("Game Over! It's a Yeti!");
            h = c;
            $("#score").html('Score: ' + c + '<br> High Score : ' + h);
            location.reload();
        } else {
            $(this).css('background-image', 'url(images/penguin_' + Char + '.png)');
            $("#score").html('Score : ' + c + '<br> High Score : ' + h);
        }
        
        if (c == 8) {
            alert("Congratulations! You have won the game!");
            location.reload();
        }
    });

    function RandomImage() {
        var n = Math.floor(Math.random() * 9);
        $("#penguin" + n).addClass('yeti');
        $("#penguin" + n).attr('id', 'yeti');
    }
});

$(document).ready(function () {
    var c = 0; // Current score
    var h = 0; // High score
    var timeLeft = 30; // Timer set to 30 seconds
    var timer; // Variable to hold the timer interval
    var gameStarted = false; // Flag to check if the game has started

    $("#score").html('Score : ' + c + '<br> High Score : ' + h);
    $("#timer").hide(); // Hide timer initially

    $("#startButton").click(function() {
        if (!gameStarted) { // Check if the game has not started
            gameStarted = true; // Set the flag to true
            RandomImage();
            $("#startButton").hide(); // Hide the start button after starting the game
            $("#timer").show(); // Show the timer
            startTimer(); // Start the timer
        }
    });

    $(".Penguins").on('click', function () {
        if (gameStarted && timeLeft > 0) { // Only allow clicks if the game has started and time is left
            c++;
            var num = $(this).attr('id');
            var Char = num.substr(num.length - 1);
            
            if ($(this).hasClass("yeti")) {
                $(this).css('background-image', 'url(images/yeti.png)'); // Show Yeti image
                clearInterval(timer); // Stop the timer immediately
                setTimeout(function() {
                    alert("Game Over! It's a Yeti! Your score is: " + c);
                    resetGame();
                }, 100); // Delay alert to allow Yeti image to show
            } else {
                $(this).css('background-image', 'url(images/penguin_' + Char + '.png)'); // Show penguin image
                $("#score").html('Score : ' + c + '<br> High Score : ' + h);
            }
            
            if (c == 8) {
                clearInterval(timer); // Stop the timer immediately
                alert("Congratulations! You have won the game!");
                resetGame();
            }
        }
    });

    function RandomImage() {
        var n = Math.floor(Math.random() * 9);
        $("#penguin" + n).addClass('yeti');
        $("#penguin" + n).attr('id', 'yeti');
    }

    function startTimer() {
        timeLeft = 30; // Reset timer to 30 seconds
        $("#time").text(timeLeft); // Display the initial time
        timer = setInterval(function() {
            timeLeft--; // Decrease time left by 1
            $("#time").text(timeLeft); // Update timer display
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time's up! Your score is: " + c);
                resetGame();
            }
        }, 1000); // Update every second
    }

    function resetGame() {
        clearInterval(timer);
        c = 0; // Reset score
        $("#score").html('Score : ' + c + '<br> High Score : ' + h);
        $("#time").text(30); // Reset timer display to 30
        $(".Penguins").css('background-image', ''); // Clear images
        $(".Penguins").removeClass('yeti'); // Remove yeti class
        $("#startButton").show(); // Show start button again
        $("#timer").hide(); // Hide timer
        gameStarted = false; // Reset the game started flag
    }
});

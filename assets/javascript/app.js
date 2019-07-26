$(document).ready(function() {

    $("#startButton").on("click", gameState.startTimer);

});

let gameState = {
    
    timeRemaining: 60,

    startTimer: function() {
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        setInterval(gameState.countdown, 1000);
        $("#startPage").hide();
        trivia.displayQuestions();

    },
        
    countdown: function() {
        gameState.timeRemaining--;
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
        }
    },

    stopTimer: function() {
        clearInterval();
        trivia.checkAnswers();
    },

    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
        $("endPage").show();
        $("questionsBox").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correctAnswers").text("Correct Answers: " + numCorrect);
        $("#incorrectAnswers").text("Incorrect Answers: " + numIncorrect);
        $("#unanswered").text("Skipped Questions: " + numUnanswered);
    }
}

let trivia = {
    
}


};
console.log(gameState);





    








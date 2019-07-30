$(document).ready(function(){

    //start game when user clicks start button
    $("#startButton").on("click", gameState.startTimer);
  
  });
  
  
  let gameState = {
  
    // set the time at 60 seconds, and count down by 1 second
    timeRemaining : 60,
  
    // start the timer, hide the start page, show the questions
    startTimer: function() {
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#startPage").hide();
      trivia.displayQuestions();
    },
  
    // decrement the timer and update the UI; stop the timer at 0
    countdown: function() {
      gameState.timeRemaining--;
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
      }
    },
  
    // stop the timer and check the answers
    stopTimer: function() {
      clearInterval();
      trivia.checkAnswers();
    },
  
    // hide the quetions and display the end page with results
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#endPage").show();
      $("#questionBox").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correctAnswers").text("Correct answers: " + numCorrect);
      $("#incorrectAnswers").text("Incorrect answers: " + numIncorrect);
      $("#unanswered").text("Skipped questions: " + numUnanswered);
    }
  }
  
  // functions to handle the building questions page and scoring
  let trivia = {
  
    // pull questions from the array of questions, loop through them, and append to UI
    displayQuestions: function() {
      let divContainer = $("#questionsBox");
      let answerGroup = $(".form-check");
      divContainer.append('<h2>Answer the following questions:</h2>');
              
      for (let i = 0; i < questionBank.length; i++) {
  
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
        let answer1 = questionBank[i].answers[0];
        let answer2 = questionBank[i].answers[1];
        let answer3 = questionBank[i].answers[2];
  
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
      }
  
      // add a Done button to the end of the page and register its click handler
      let doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameState.stopTimer);
    },
  
    // test if the user answers are correct, incorrect, or if there are unanswered questions
    checkAnswers: function() {
      let correctAnswer;
      let userAnswer;
      let numCorrect = 0;
      let numIncorrect = 0;
      let numUnanswered = 0;
  
      // loop through to compare the text of the label with the user answers
      // increment score counts appropriately
      for (let i = 0; i < questionBank.length; i++) {
        correctAnswer = questionBank[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  
      // show the end page with the score tally
      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },
  }
  
  // array of objects with the questions, possible answers, and the correct answer
  let questionBank =
  [
    {
      question: "What kind of farm does Dwight own?",
      answers: ["Bear Farm", "Beet Farm", "Carrot Farm"],
      correct: "Beet Farm"
    },
  
    {
      question: "How long were Pam and Roy engaged?",
      answers: ["3-4 years", "6 years", "3 months"],
      correct: "3-4 years"
    },
    {
      question: "What name did Pam and Angela fight over for their babies?",
      answers: ["Andrew", "James", "Philip"],
      correct: "Philip"
    },
    {
      question: "Where did Jim tell Pam about his feelings?",
      answers: ["The office parking lot", "The office", "The warehouse"],
      correct: "The office parking lot"
    },
    {
      question: "Where do Jim and Pam share their first real kiss?",
      answers: ["The roof", "The warehouse", "Jim's desk"],
      correct: "Jim's desk"
    },
    {
      question: "Which of Angela's cats does Dwight freeze",
      answers: ["Bandit", "Sprinkles", "Sparkles"],
      correct: "Sprinkles"
    },
    {
      question: "Who won the bronze metal during the office Olympics?",
      answers: ["Michael", "Toby", "Jim" ],
      correct: "Jim"
    },
    {
      question: "Which office employee did Michael hit with his car?",
      answers: ["Angela", "Meredith", "Kelly"],
      correct: "Meredith"
    },
    {
      question: "Who started the fire?",
      answers: ["Ryan", "Toby", "Andy"],
      correct: "Ryan"
    },
    {
      question: "What vegetable does Michael force feed Kevin?",
      answers: ["Baby carrots", "Corn on the cob", "Broccoli"],
      correct: "Broccoli"
    }
  ]
  




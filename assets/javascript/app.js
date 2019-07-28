$(document).ready(function(){

    // start the game when user clicks on Start button
    $("#startButton").on("click", gameState.startTimer);
  
  });
  
  // information about the state of game play
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
      question: "Who is the mayor of Springfield?",
      answers: ["Montgomery Burns", "Joe Quimby", "Clancy Wiggum"],
      correct: "Joe Quimby"
    },
  
    {
      question: "What did Lyle Lanley sell to Brockway, Ogdenville, and North Haverbrook?",
      answers: ["a monorail", "a nuclear power plant", "a mule with a spinning wheel"],
      correct: "a monorail"
    },
    {
      question: "What what the name of Bart's elephant?",
      answers: ["Snowball", "Stampy", "Laddie"],
      correct: "Stampy"
    },
    {
      question: "When Bart rents a car with a fake license, where does he drive with his friends on spring break?",
      answers: ["Shelbyville", "Itchy and Scratchy Land", "Knoxville"],
      correct: "Knoxville"
    },
    {
      question: "When the Simpsons move to a farm, what plant do they grow and sell at a roadside stand?",
      answers: ["carrots and peas", "a cross of tomatoes and tobacco", "gummy bears"],
      correct: "a cross of tomatoes and tobacco"
    },
    {
      question: "Which character that Homer voiced was added to, and promptly killed off, on the Itchy and Scratchy Show?",
      answers: ["Poochie", "Max Power", "Kang"],
      correct: "Poochie"
    },
    {
      question: "When child protective services removes the Simpson kids, which family fosters them?",
      answers: ["Flanders", "Van Houten", "Smithers"],
      correct: "Flanders"
    },
    {
      question: "When Marge starts a business after attending a franchise fair, what is her company?",
      answers: ["Fleet-a-Pita", "Flancrest Enterprises", "Pretzel Wagon"],
      correct: "Pretzel Wagon"
    },
    {
      question: "What dish does Lisa make for Homer's BBBQ backyard barbecue?",
      answers: ["salad", "gazpacho", "lamb chops"],
      correct: "gazpacho"
    },
    {
      question: "What is Principal Seymour Skinner's real name?",
      answers: ["Troy McClure", "Gary Chalmers","Armin Tamzarian"],
      correct: "Armin Tamzarian"
    }
  ]
  




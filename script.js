// Create a new Class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  // We want to see what question we are currently on
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrect(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// Question Class
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrect(choice) {
    return this.answer === choice;
  }
}

// Display Question
function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // Show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    // Show Options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

// Guess function
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

// Show quiz progress
function showProgress() {
  let currentQuestionNum = quiz.questionIndex + 1;

  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currentQuestionNum} of ${quiz.questions.length}`;
}

function showScores() {
  let quizEndHTML = `
        <h1>Quiz Completed</h1>
        <h2 id='score'>You have scored ${quiz.score} of ${quiz.questions.length}</h2>
        <div class='quiz-repeat'>
            <a href='index.html'>Take Quiz Again</a>
        </div>`;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `${quizEndHTML}`;
}

// Create Questions
let questions = [
  new Question(
    "What is the main difference between Java and JavaScript?",
    [
      "Java is a scripting language, while JavaScript is an object-oriented programming language",
      "Java is primarily used for creating interactive web pages, while JavaScript is more backend based",
      "Java code must be interpreted at runtime, while JavaScript code must be compiled",
      "Java is primarily used for creating complex backend systems, while JavaScript is primarily used for creating interactive web pages and UI rendering.",
    ],
    "Java is primarily used for creating complex backend systems, while JavaScript is primarily used for creating interactive web pages and UI rendering."
  ),
  new Question(
    "What does HTML Stand for?",
    [
      "High Tech Machine Language",
      "Hyperlink and Text Markup Language",
      "HyperText Markup Language",
      "Hypermedia and Text Markup Language",
    ],
    "HyperText Markup Language"
  ),
  new Question(
    "What are Pure Functions?",
    [
      "Pure functions are just functions that are pure.",
      "Any function that affects any state other than that of local variables",
      "Pure Functions are functions that always return the same result if the same arguments are passed. Have no Side Effects",
      "Pure Functions are functions that always return the same result if the arguments passed are different and have side effects",
    ],
    "Pure Functions are functions that always return the same result if the same arguments are passed. Have no Side Effects"
  ),
  new Question(
    "What is hoisting in JavaScript?",
    [
      "A process of lifting heavy objects using JavaScript code",
      "A process of reordering variables and function declarations in the code before it is executed",
      "A process of compressing and optimizing JavaScript code for faster performance",
      "A process of encrypting JavaScript code for security purposes",
    ],
    "A process of reordering variables and function declarations in the code before it is executed"
  ),
  new Question(
    "Which of the following is true about the execution of Java and JavaScript code?",
    [
      "Java code is interpreted at runtime, while JavaScript code is compiled",
      "Java code runs directly in the browser, while JavaScript code runs on a virtual machine",
      "Java code is more versatile than JavaScript code",
      "JavaScript code runs directly in the browser, while Java code can run on a virtual machine",
    ],
    "JavaScript code runs directly in the browser, while Java code can run on a virtual machine"
  ),
];

let quiz = new Quiz(questions);

//display question
displayQuestion();


// global vars
var questionsEl = document.querySelector('#questions')
var timerEl = document.querySelector('#timer')
var scoreEl = document.querySelector('#score')
var startingTime = 10
var newTime = startingTime
var intervalId
var score = 0
var questionEl = document.querySelector('#questions')
var questionIndex = 0
var userChoice
var questionNum

// create an array of objects to get questions from
var questions = [
    {question: "What is ___",
    answer: "A: __",
    choices: ["A: __", "B: jfgdg", "C:jkgdhkjg", "D: jkhgjhgs"]
    },
    {question: "How do you ___",
    answer: "C: ___",
    choices: ["A: diushsjh", "B: kjdhfkjghg", "C: ___", "D: kjsdhgj"]
    }
]

// // functions

// create question element, append to page
function createQuestion(questionNum) {
    questionEl.innerText = questions[questionNum].question
    for (var i=0; i < questions[questionNum].choices.length; i++) {
        var button = document.createElement('button')
        button.setAttribute('class', 'btn btn-secondary m-2')
        questionEl.appendChild(button)
        button.innerText = questions[questionNum].choices[i]
    }
}


function questionAnswer() {
    questionsEl.addEventListener('click', function(event) {
        if (event.target.getAttribute('class') === 'btn btn-secondary m-2') {
        userChoice = event.target.innerHTML
        handleQuestionAnswer(questionIndex);
        questionIndex++
        }
    });
}

function handleQuestionAnswer(questionNum) {
    var correctAnswer = questions[questionNum].answer;
    if (userChoice === correctAnswer) {
        score++
        scoreEl.innerText = score
    } else {
        newTime -= 5;
    }
}

function gameOver() {
    clearInterval(intervalId)
    var intitials = prompt('What are your initials?')
    var data = {intitials: intitials, score: score}
    localStorage.setItem('codeQuizChamp', JSON.stringify(data))

    var playAgain = confirm('want to play again?')
    if (playAgain) {
        window.location.reload()
    }
}

function updateTimer() {
    intervalId = setInterval(function() {
        newTime--;
        timerEl.innerHTML = 'Timer: ' + newTime;
        if (newTime === 0) {
            gameOver()
        }
    }, 1000)
}


function startQuiz() {
    updateTimer();
    createQuestion(0);
    questionAnswer();

}

// // call start quiz

startQuiz();


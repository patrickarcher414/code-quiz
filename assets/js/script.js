
// global vars
var questionsEl = document.querySelector('#questions')
var timerEl = document.querySelector('#timer')
var scoreEl = document.querySelector('#score')
var startingTime = 10
var newTime = startingTime
var intervalId

// // functions

// create question element, append to page
function createQuestion() {
    // code
}

function gameOver() {
    
}

function updateTimer() {
    intervalId = setInterval(function() {
        newTime--;
        timerEl.innerHTML = 'Timer: ' + newTime;
        if (newTime === 0) {
            clearInterval(intervalId)
            gameOver()
        }
    }, 1000)
}


function startQuiz() {
    updateTimer();
    
}

// // call start quiz

startQuiz();


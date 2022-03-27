
// global vars
var questionsEl = document.querySelector('#questions')
var timerEl = document.querySelector('#timer')
var scoreEl = document.querySelector('#score')
var startingTime = 10
var newTime = startingTime
var intervalId
var score = 0

// // functions

// create question element, append to page
function createQuestion() {
    // code
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
    
}

// // call start quiz

startQuiz();


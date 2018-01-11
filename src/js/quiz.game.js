quiz.game = () => {

let questionDiv = $('#question');
const guessButtons = {
    a: document.querySelector('#btn-a'),
    b: document.querySelector('#btn-b'),
    c: document.querySelector('#btn-c'),
    d: document.querySelector('#btn-d'),
};

function displayQuestion(q) {
    questionDiv.text(q.question);
    for (var key in q.choice) {
        guessButtons[key].style.color = "white";
        guessButtons[key].innerHTML = q.choice[key];
    }
}

let score = 0;
let currentQuestion = quiz.repository.questions.pop();

function showGuessResults() {                                                    //lgsag till success
  Object.keys(guessButtons).forEach((key) => {

  })
}

function showResult() {
    document.querySelector('.guessing-game').innerHTML = '<h2>Final Score: ' + score + '</h2>';
}

const showNextQuestion = () => {
    if (quiz.repository.questions.length < 1) {
        alert('no more questions available || do not double click || restart, sorry');
    } else {
        currentQuestion = quiz.repository.questions.pop();
        displayQuestion(currentQuestion);
    }
};


  const guessClicked = guess => () => {
    if (currentQuestion.isCorrectGuess(guess)) {
      score += 1;
    }
    showGuessResults();
    if (quiz.repository.questions.length === 0) {
      setTimeout(showResult, 1000);
    } else {
      setTimeout(showNextQuestion, 1);
    }
  };

  Object.keys(guessButtons).forEach((key) => {
    guessButtons[key].addEventListener('click', guessClicked(key));
  });

  displayQuestion(currentQuestion);
};

window.addEventListener('DOMContentLoaded', () => {
  quiz.game();
});

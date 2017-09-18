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
        alert('no more questions available, sorry');
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
      setTimeout(showNextQuestion, 1000);
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

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
// quiz.game = () => {
//
// let questionDiv = $('#question'); // Connects to #question a span in HTML, to view the question in it
// const guessButtons = {
//     a: document.querySelector('#btn-a'),
//     b: document.querySelector('#btn-b'),
//     c: document.querySelector('#btn-c'),
//     d: document.querySelector('#btn-d'),
// };
//
// function displayQuestion(q) {
//     questionDiv.text(q.question); //questivDiv platsen till << text. CurrentQuestion.question från const som hmtar från repository.pop
//     for (var key in q.choice) {
//         guessButtons[key].style.color = "white";
//         guessButtons[key].innerHTML = q.choice[key];
//     }
// }
//
// // let qCount = document.querySelector('#qCount');
// let score = 0;
// let currentQuestion = quiz.repository.questions.pop(); //Gets one question at a time from the repository
//
// function showGuessResults() {
//     Object.keys(guessButtons).forEach((key) => {
//       guessButtons[key].classList.remove('btn-primary');
//       if (currentQuestion.isCorrectGuess(key)) {
//         guessButtons[key].classList.add('btn-success');
//       } else {
//         guessButtons[key].classList.add('btn-danger');
//       }
//     });
// }
//
// function showResult() {
//     document.querySelector('.guessing-game').innerHTML = '<h2>Final Score: ' + score + '</h2>';
// }
//
// const showNextQuestion = () => {
//     if (quiz.repository.questions.length < 1) {
//         alert('no more questions available, sorry');
//     } else {
//         currentQuestion = quiz.repository.questions.pop();
//         displayQuestion(currentQuestion);
//     }
// };
//
//
//   const guessClicked = guess => () => {
//     if (currentQuestion.isCorrectGuess(guess)) {
//       score += 1;
//     }
//     showGuessResults();
//     if (quiz.repository.questions.length === 0) {
//       setTimeout(showResult, 1000);
//     } else {
//       setTimeout(showNextQuestion, 1000);
//     }
//   };
//
//   Object.keys(guessButtons).forEach((key) => {
//     guessButtons[key].addEventListener('click', guessClicked(key));
//   });
//
//   displayQuestion(currentQuestion);
// };
//
// window.addEventListener('DOMContentLoaded', () => {
//   quiz.game();
// });


// let questionDiv = $('#question').text(currentQuestion.question);
// ..........................------.-.-.-.-.-.// quiz.game = () => {
//
// let questionDiv = $('#question'); // Connects to #question a span in HTML, to view the question in it
//
// questionDiv.text(currentQuestion.question); //questivDiv platsen till << text. CurrentQuestion.question från const som hmtar från repository.pop
//
//   const guessButtons = {
//      a: document.querySelector('#btn-a'),
//      b: document.querySelector('#btn-b'),
//      c: document.querySelector('#btn-c'),
//      d: document.querySelector('#btn-d'),
//    };
//
//   for (var key in currentQuestion.choice) {
//     $('#btn-' + key).text(currentQuestion.choice[key]);
// }
//
// const showNextQuestion = () => {
//     currentQuestion = quiz.repository.questions.pop();
//     displayQuestion(currentQuestion);
//   };
//
//   let score = 0;
//   let currentQuestion = quiz.repository.questions.pop(); //Gets one question at a time from the repository
//
//
// const guessClicked = guess => () => {
//     if (currentQuestion.isCorrectGuess(guess)) {
//       score += 1;
//     }
//
//     Object.keys(guessButtons).forEach((key) => {
//         guessButtons[key].addEventListener('click', guessClicked(key));
//       });
//
//       displayQuestion(currentQuestion);
//     };
//
// }
// window.addEventListener('DOMContentLoaded', () => {
//   quiz.game();
// });

//
//
//
//
//
//
//

// document.addEventListener("DOMContentLoaded", function(event) {
//
// function setView(name) {
//     // $('view.active').removeClass('active');        do I need to use these or why u added this line and the one under in comment QRAKHEN
//     // $('view[name="' + param '"]').addClass('active');
//     $('view').hide();
//     $('view[name="' + name + '"]').show();
// };
//
// //One way to get from <input key=value
// getInputValue = function(selector) {
//   return $('input[key="' + selector + '"]').val();
// }
//
// enterGame = function() {       // We call the enterGame function in html onClick,
//     window.playerName = getInputValue('playerName');  //Get the name into playerName variable
//     if (playerName.length < 5) {  // If shorter than 5, alert else change and set the view to startGame
//       return alert('sorry, too short nickname')
//     } else {
//     setView('startGameView');   //setView(viewName) - you can provide a variable with type of String or a String constant which is being done here
//     $('view[name="startGameView"] p').text('Hi there: ' + window.playerName + '!'); // change the paragraph text just for fun
//    }
// }
//
// startGame = function() {
//     // do some stuff here...          like what?
//     setView('gameTime');
// } // HERE!!!!!!!!!!!!!! can you explain these two functions properly more in depth? like why dont you have any argument in the html file, you just call a function name? and why doesnt the function name has to be same name as of my views?

//
// var send = document.getElementById('send'); //Chat Id for SEND Button
// var chatWindow = document.querySelector('.chat-window'); //Window where the chat's text appear
// var inputText = document.querySelector('#inputText'); //Write a msg, input part to the chat
//
// send.addEventListener("click", () => { //Send btn.click >
// chatWindow.scrollTop = chatWindow.scrollHeight; //Scrollable
// var textValue = inputText.value;   // the inputed text stores in textValue
//
// chatWindow.innerText = chatWindow.value + textValue + '\n';  //write out with method .innerText of the window = plus chatwindow already value and also the new input
// inputText.value = ''; //Clear the box after typed a msg in the input to chat
// });
//
// //Clear chat
// setInterval(function(clearChat) {
// chatWindow.innerText = 'Chat cleaned...\n';
// }, 15000);

// .value returns what is in the element aka variable
// .innerText you call it when you want to change the value of it
// });
////////////////////////////////////////////////////////////////////////////////////// SENASTE
// document.addEventListener("DOMContentLoaded", function(event) {
//
// function setView(name) {
//     // $('view.active').removeClass('active');        do I need to use these or why u added this line and the one under in comment QRAKHEN
//     // $('view[name="' + param '"]').addClass('active');
//     $('view').hide();
//     $('view[name="' + name + '"]').show();
// };
//
// //One way to get from <input key=value
// getInputValue = function(selector) {
//   return $('input[key="' + selector + '"]').val();
// }
//
// enterGame = function() {       // We call the enterGame function in html onClick,
//     window.playerName = getInputValue('playerName');  //Get the name into playerName variable
//     if (playerName.length < 5) {  // If shorter than 5, alert else change and set the view to startGame
//       return alert('sorry, too short nickname')
//     } else {
//     setView('startGameView');   //setView(viewName) - you can provide a variable with type of String or a String constant which is being done here
//     $('view[name="startGameView"] p').text('Hi there: ' + window.playerName + '!'); // change the paragraph text just for fun
//    }
// }
//
// startGame = function() {
//     // do some stuff here...          like what?
//     setView('gameTime');
// } // HERE!!!!!!!!!!!!!! can you explain these two functions properly more in depth? like why dont you have any argument in the html file, you just call a function name? and why doesnt the function name has to be same name as of my views?
//
//
// var send = document.getElementById('send'); //Chat Id for SEND Button
// var chatWindow = document.querySelector('.chat-window'); //Window where the chat's text appear
// var inputText = document.querySelector('#inputText'); //Write a msg, input part to the chat
//
// send.addEventListener("click", () => { //Send btn.click >
// chatWindow.scrollTop = chatWindow.scrollHeight; //Scrollable
// var textValue = inputText.value;   // the inputed text stores in textValue
//
// chatWindow.innerText = chatWindow.value + textValue + '\n';  //write out with method .innerText of the window = plus chatwindow already value and also the new input
// inputText.value = ''; //Clear the box after typed a msg in the input to chat
// });
//
// //Clear chat
// setInterval(function(clearChat) {
// chatWindow.innerText = 'Chat cleaned...\n';
// }, 15000);
//
// // .value returns what is in the element aka variable
// // .innerText you call it when you want to change the value of it
// });

// document.addEventListener("DOMContentLoaded", function(event) {
//
// //  $('view[name="chattt"]').hide(); GÖMMER EN GREJ, CHATTEN
//  // $('view').hide(); gömer alla
//
//   function setView(name) {
// // $('view.active').removeClass('active');
// // $('view[name="' + param '"]').addClass('active');
// $('view').hide();
// $('view[name="' + name + '"]').show();
//   };
//
//
// var startGameBtn = document.getElementById('startGameBtn');
// startGameBtn.addEventListener("click", directToGame);
//
// //Ett sätt att hämta från <input key=value
// getInputValue = function(selector) {
//   return $('input[key="' + selector + '"]').val();
// }
//
// $('view[name="gameTime"]').hide();
//
//
// function directToGame() {
// if (getInputValue('playerName').length < 5) {
//   alert('Too short nickname');
// } else {
// setView(view);
//   // location.href = "file:///Users/dennis/Documents/Development/workspace-yh-web/School/guess-game/src/index.html";
// console.log('ready to start game');
//   }
// };
//
//
// var send = document.getElementById('send');
// var chatWindow = document.querySelector('.chat-window');
// var inputText = document.querySelector('#inputText');
//
// send.addEventListener("click", () => {
// chatWindow.scrollTop = chatWindow.scrollHeight;
// var textValue = inputText.value;
//
// chatWindow.innerText = chatWindow.value + textValue + '\n';
// inputText.value = '';
// });
//
// setInterval(function(clearChat) {
// chatWindow.innerText = 'Chat cleaned...\n';
// }, 12000);
//
// // .value retunerar vad som finns i elementet aka variabeln
// // .innerText anropar när du ska ändra värde på variabel
// });

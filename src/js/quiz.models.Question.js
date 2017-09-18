quiz.models.Question =  class {

constructor(id, question, answer, choice) {
  this.id = id;
  this.question = question;
  this.answer = answer;
  this.choice = choice;
  }

  isCorrectGuess(guess) {
    return this.answer === guess;
  }
};

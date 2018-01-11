quiz.views = {}

  setView = (name) => {
      $('view').hide();
      $('view[name="' + name + '"]').show();
  };

  getInputValue = (selector) => {
    return $('input[key="' + selector + '"]').val();
  }

     enterGame = () => {
      window.playerName = getInputValue('playerName');
      if (playerName.length < 5) {
        return alert('sorry, too short nickname')
      } else {
      setView('startGameView');
      $('view[name="startGameView"] p').text('Hi ' + window.playerName + '!');
     }
  }

    startGame = () => {
      setView('gameTime');
  }

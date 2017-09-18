quiz.views = {}

  function setView(name) {
      $('view').hide();
      $('view[name="' + name + '"]').show();
  };

  getInputValue = function(selector) {
    return $('input[key="' + selector + '"]').val();
  }

  enterGame = function() {
      window.playerName = getInputValue('playerName');
      if (playerName.length < 5) {
        return alert('sorry, too short nickname')
      } else {
      setView('startGameView');
      $('view[name="startGameView"] p').text('Hi there: ' + window.playerName + '!');
     }
  }

  startGame = function() {
      setView('gameTime');
  }

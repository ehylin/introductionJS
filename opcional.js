// Función para crear un partido
function createMatch(player1, player2) {
  let player1Score = 0;
  let player2Score = 0;

  return {
    pointWonBy: function (player) {
      if (player === 1) {
        player1Score++;
      } else {
        player2Score++;
      }
    },
    getCurrentRoundScore: function () {
      return `${player1} ${player1Score}-${player2Score} ${player2}`;
    },
    getGameScore: function () {
      return `${player1} ${player1Score}\n${player2} ${player2Score}`;
    },
    getMatchScore: function () {
      return `${player1} ${player1Score}\n${player2} ${player2Score}`;
    },
    getWinner: function () {
      if (player1Score >= 4 && player1Score - player2Score >= 2) {
        return player1;
      }
      if (player2Score >= 4 && player2Score - player1Score >= 2) {
        return player2;
      }
      return null;
    },
  };
}

// Función para simular un partido
function simulateMatch(player1, player2) {
  const game = createMatch(player1, player2);
  let currentRoundScore;

  while (!game.getWinner()) {
    const randomPoint = Math.floor(Math.random() * 2) + 1;
    game.pointWonBy(randomPoint);
    currentRoundScore = game.getCurrentRoundScore();
    console.log(currentRoundScore);
  }

  return game.getWinner();
}

// Función para simular un torneo
function simulateTournament(players) {
  while (players.length > 1) {
    const nextRoundPlayers = [];

    for (let i = 0; i < players.length; i += 2) {
      const winner = simulateMatch(players[i], players[i + 1]);
      nextRoundPlayers.push(winner);
    }

    console.log("Avanzan a la siguiente ronda:", nextRoundPlayers);
    players = nextRoundPlayers;
  }

  console.log("Ganador del torneo:", players[0]);
}

const players = ["Alberto C", "David J", "Javier M", "Eduardo A"];
simulateTournament(players);

import { MARKS, PLAYERS } from "../constants";

function playerUI(screen, player) {
  // Maybe turn this into a class
  return {
    cellEmoji(mark, player = PLAYERS.PLAYER) {
      if (player === PLAYERS.PLAYER) {
        switch (mark) {
          case MARKS.FREE:
            return "🌊";
          case MARKS.MARKED:
            return "❌";
          case MARKS.SHIP:
            return "⛵";
          case MARKS.HIT:
            return "💀";
          default:
            break;
        }
      } else if (player === PLAYERS.OPPONENT) {
        if (mark == MARKS.HIT) return "💥";
        if (mark == MARKS.MARKED) return "❌";
        // if (mark == MARKS.SHIP) return "⛵";
        else return "🌊"
      }
    },
    createPlayerContainer(user) {
      let playerContainer = document.createElement("div");
      playerContainer.classList.add('player-container');
      playerContainer.innerHTML = `<div class='player-name'><h2>${user.name}</h2></div>`
      return playerContainer;
    },
    renderHeader() {
      let header = document.createElement('div');
      header.innerHTML = `<h1 class='title'>Battleship</h1>`;
      return header
    },
    renderShips(user) {
      let shipGroup = document.createElement("div");
      shipGroup.classList.add('ship-list')
      user.ships.forEach((ship) => {
        let shipIcon = document.createElement("div");
        shipIcon.innerHTML = ship.isSunk ? `💀` : `🚢`;
        shipIcon.classList.add("ship-icon")
        shipGroup.appendChild(shipIcon); 
      })
      return shipGroup;
    },
    renderPlayerBoard() {
      // Creating container tags
      let playerContainer = this.createPlayerContainer(player);
      let boardContainer = document.createElement("div");
      let playerShips = this.renderShips(player);
      let playerUIBoard = document.createElement("div");
      let playerGrid = player.board.board;

      boardContainer.classList.add("board-container")
      playerUIBoard.classList.add("board"); 
      playerUIBoard.classList.add("player-board");

      // Creating grid
      playerGrid.forEach((row) => {
        let gridRow = document.createElement("div");
        gridRow.classList.add("board-row");
        row.forEach((coord) => {
          let gridCoordinate = document.createElement("div");
          gridCoordinate.classList.add("coordinate");
          gridCoordinate.classList.add("player-coord");
          gridCoordinate.classList.add("opponent-coord");
          gridCoordinate.setAttribute("data-x", `${coord.x}`);
          gridCoordinate.setAttribute("data-y", `${coord.y}`);
          gridCoordinate.innerHTML = this.cellEmoji(coord.mark);
          gridRow.appendChild(gridCoordinate);
        });
        playerUIBoard.appendChild(gridRow);
      });

      boardContainer.appendChild(playerShips);
      boardContainer.appendChild(playerUIBoard);
      playerContainer.appendChild(boardContainer);
      return playerContainer;
    },
    renderOpponentBoard() {
      // Creating container tags
      let playerContainer = this.createPlayerContainer(player.opponent)
      let boardContainer = document.createElement("div");
      let opponentShips = this.renderShips(player.opponent)
      let opponentUIBoard = document.createElement("div");
      let opponentGrid = player.opponent.board.board;

      boardContainer.classList.add("board-container")
      opponentUIBoard.classList.add("board");
      opponentUIBoard.classList.add("opponent-board");

      // Creating grid
      opponentGrid.forEach((row) => {
        let gridRow = document.createElement("div");
        gridRow.classList.add("board-row");
        row.forEach((coord) => {
          let gridCoordinate = document.createElement("div");
          gridCoordinate.classList.add("coordinate");
          gridCoordinate.setAttribute("data-x", `${coord.x}`);
          gridCoordinate.setAttribute("data-y", `${coord.y}`);

          gridCoordinate.innerHTML = this.cellEmoji(coord.mark, PLAYERS.OPPONENT);
          gridRow.appendChild(gridCoordinate);
        });
        opponentUIBoard.appendChild(gridRow);
      });

      boardContainer.appendChild(opponentShips);
      boardContainer.appendChild(opponentUIBoard);
      playerContainer.appendChild(boardContainer);
      return playerContainer;
    },
    renderPrompt(message){
      let prompt = document.querySelector('.prompt');
      if (prompt === null) {
        prompt = document.createElement('div');
        prompt.classList.add('prompt')
        screen.appendChild(prompt)
      }
      prompt.innerHTML = "";
      prompt.innerHTML = `${message}`;
    },
    renderUI() {
      screen.innerHTML = "";

      let testBtn = document.createElement('button');

      let playerUI = document.createElement("div");
      let header = this.renderHeader();
      let gameContainer = document.createElement("div");
      let playerBoard = this.renderPlayerBoard();
      let oppBoard = this.renderOpponentBoard();

      playerUI.classList.add("player-ui");
      gameContainer.classList.add("game-container");

      gameContainer.appendChild(playerBoard);
      gameContainer.appendChild(oppBoard);
      screen.appendChild(header);
      playerUI.appendChild(gameContainer);
      screen.appendChild(playerUI);
      screen.appendChild(testBtn);


      testBtn.addEventListener('click', () => {
        player.showGame();
        player.opponent.showGame();
        
      })
    },
  };
}

export { playerUI };

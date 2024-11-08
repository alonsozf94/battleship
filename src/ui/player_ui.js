import { MARKS } from "../constants";

function playerUI(screen, player) {
  // Maybe turn this into a class
  return {
    cellEmoji(mark) {
      switch (mark) {
        case MARKS.FREE:
          return "🌊";
        case MARKS.MARKED:
          return "❌";
        case MARKS.SHIP:
          return "⛵";
        case MARKS.HIT:
          return "💥";
        default:
          break;
      }
    },
    renderShips() {
      let shipGroup = document.createElement("div");
      return shipGroup;
    },
    renderPlayerBoard() {
      // Creating container tags
      let playerUIBoard = document.createElement("div");
      let playerGrid = player.board.board;

      playerUIBoard.classList.add('board');
      playerUIBoard.classList.add('player-board');

      // Creating grid
      playerGrid.forEach((row) => {
        let gridRow = document.createElement("div");
        gridRow.classList.add("board-row");
        row.forEach((coord) => {
          let gridCoordinate = document.createElement("div");
          gridCoordinate.classList.add("coordinate");
          gridCoordinate.classList.add("player-coord");
          gridCoordinate.classList.add("opponent-coord");
          gridCoordinate.setAttribute('data-x',`${coord.x}`);
          gridCoordinate.setAttribute('data-y',`${coord.y}`);
          gridCoordinate.innerHTML = this.cellEmoji(coord.mark);
          gridRow.appendChild(gridCoordinate);
        });
        playerUIBoard.appendChild(gridRow);
      });

      return playerUIBoard;
    },
    renderOpponentBoard() {
      // Creating container tags
      let opponentUIBoard = document.createElement("div");
      let opponentGrid = player.opponent.board.board;

      opponentUIBoard.classList.add('board');
      opponentUIBoard.classList.add('opponent-board');

      // Creating grid
      opponentGrid.forEach((row) => {
        let gridRow = document.createElement("div");
        gridRow.classList.add("board-row");
        row.forEach((coord) => {
          let gridCoordinate = document.createElement("div");
          gridCoordinate.classList.add("coordinate");
          gridCoordinate.setAttribute('data-x',`${coord.x}`);
          gridCoordinate.setAttribute('data-y',`${coord.y}`);
          gridCoordinate.innerHTML = this.cellEmoji(coord.mark);
          gridRow.appendChild(gridCoordinate);
        });
        opponentUIBoard.appendChild(gridRow);
      });

      return opponentUIBoard;
    },
    renderUI() {
      // screen.innerHTML = '';
      
      let playerUI = document.createElement("div");
      let boardsContainer = document.createElement("div");
      let playerShips = this.renderShips();
      let playerBoard = this.renderPlayerBoard();
      let oppBoard = this.renderOpponentBoard();

      playerUI.classList.add('player-ui');
      boardsContainer.classList.add('boards-container');

      playerUI.appendChild(playerShips);
      boardsContainer.appendChild(playerBoard);
      boardsContainer.appendChild(oppBoard);
      playerUI.appendChild(boardsContainer)
      screen.appendChild(playerUI);
    },
  };
}

export { playerUI };

import { playerUI } from "./ui/player_ui";
import { Player } from "./player";
import { Battleship } from "./battleship";
import { SHIPS, DIRECTIONS } from "./constants";

function Game(player1, player2, container) {
  // Creates player and sets up properties
  let playerScreen = playerUI(container, player1);
  return {
    initializePlayers() {
    player1.opponent = player2;
    player2.opponent = player1;
    },
    positionShips(player) {
      // Adds ships to players
      // Sets up UI first
      let playerScreen = playerUI(container, player1);
      playerScreen.renderUI();
      this.attachCoordinateListeners(player, playerScreen);
    },
    attachCoordinateListeners(player, playerScreen) {
      let board = container.querySelector('.player-board');
      let coordinateList = board.querySelectorAll(".coordinate");
      // console.log(coordinateList);
      coordinateList.forEach((coord) => {
        coord.addEventListener("click", () => {
          if (player.ships.length <= 4) {
            console.log("LENGTH");
            console.log(player.ships.length);
            
            let shipToAdd = Object.values(SHIPS)[player1.ships.length];
            let newShip = new Battleship(
              shipToAdd,
              { x: coord.dataset.x, y: coord.dataset.y },
              DIRECTIONS.VERTICAL
            );
            player.addBattleship(newShip);
            playerScreen.renderUI();
            this.attachCoordinateListeners(player, playerScreen);
          } else console.log("All ships have been placed");
        });
      });
    },
    playTurn(player) {
      this.positionShips(player, container);
    },
  };
}

export { Game };
/*

game starts

you get the ship positions

You add attack function
Then you create new function for computer enemy and the computer shoots by itself
Add timer function
everytime turn ends check status of player
-- To be continued

player 1 spawns [DONE]
player 2 spawns [DONE]
each get ships [DONE]

{
player 1 attacks [DONE]
player 2 attacks [TODO]
} repeat

one player loses all ships [TODO]
game over [TODO]

*/

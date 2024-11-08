import { playerUI } from "./ui/player_ui";
import { Player } from "./player";
import { Battleship } from "./battleship";
import { SHIPS, DIRECTIONS } from "./constants";

function Game() {
  // Creates player and sets up properties
  let player1 = new Player("Blue");
  let player2 = new Player("Red");
  player1.opponent = player2;
  player2.opponent = player1;
  let player1UI = playerUI(document.querySelector("body"), player1);
  let player2UI = playerUI(document.querySelector("body"), player2);
  return {
    // Somehow make the UI get the board object with queryselector,
    // because doing it from here just gets the first instance of the rendered board
    positionShips() {
      // Adds ships to players
      // Sets up UI first
      player1UI.renderUI();
      let player1UIBoard = document.querySelector(".player-board");
      let coordinateList = player1UIBoard.querySelectorAll(".coordinate");

      // Clicking on a free space
      coordinateList.forEach((coord) => {
        coord.addEventListener("click", () => {
          console.log("aaaa");

          if (player1.ships.length <= 5) {
            let shipToAdd = Object.values(SHIPS)[player1.ships.length];
            let newShip = new Battleship(
              shipToAdd,
              { x: coord.dataset.x, y: coord.dataset.y },
              DIRECTIONS.VERTICAL
            );
            player1.addBattleship(newShip);
            console.log(
              `Occupies: ${
                parseInt(newShip.startPos.x) + parseInt(newShip.length)
              }`
            );
            player1UI.renderUI();
            console.log(`Ships: ${player1.ships.length}`);
          } else console.log("can't place no more");
        });
      });
    },
    renderGameScreen() {
      this.positionShips();
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

import { playerUI } from "./ui/player_ui";
import { Player } from "./player";
import { Battleship } from "./battleship";
import { SHIPS, DIRECTIONS } from "./constants";

function Game() {
  // Creates player and sets up properties
  let player1 =  new Player("Blue");
  let player2 =  new Player("Red");
  player1.opponent = player2;
  player2.opponent = player1;
  let player1UI = playerUI(document.querySelector("body"), player1);
  let player2UI = playerUI(document.querySelector("body"), player2);
  return {
    positionShips() { // Adds ships to players
      // Sets up UI first
      player1UI.renderUI()      
      let player1UIBoard = document.querySelector(".player-board");
      let coordinateList = player1UIBoard.querySelectorAll('.coordinate')     
      coordinateList.forEach(coord => {
        coord.addEventListener('click', () => {      
          console.log(`X: ${coord.dataset.x} Y: ${coord.dataset.y}`);
        })
      })
    },
    renderGameScreen() {
      this.positionShips()
      // const cruiser1 = new Battleship(SHIPS.CARRIER, { x: 2, y: 2 }, DIRECTIONS.VERTICAL);
      // player1.addBattleship(cruiser1);
    }
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

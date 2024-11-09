import { Battleship } from "./battleship.js";
import { Player } from "./player";
import { DIRECTIONS, SHIPS } from "./constants.js";
import { Game } from "./game.js";
import style from './style.css'

// const player = new Player('Yudai');
// const enemy = new Player('Alonso');

// player.opponent = enemy;
// enemy.opponent = player;

// const cruiser1 = new Battleship(SHIPS.CRUISER, { x: 0, y: 0 }, DIRECTIONS.HORIZONTAL);
// const cruiser2 = new Battleship(SHIPS.CRUISER, { x: 2, y: 5 }, DIRECTIONS.HORIZONTAL);

// player.addBattleship(cruiser1)
// enemy.addBattleship(cruiser2)

function render() {

  const playerYudai = new Player('Yudai');
  const playerAlonso = new Player('Alonso');

  let currentGame = Game(playerYudai, playerAlonso, document.querySelector('body'));
  currentGame.initializePlayers();
  currentGame.playTurn(playerYudai);

  // UI
  // let playerScreen = playerUI(document.querySelector('body'), player);
  // playerScreen.renderUI();
}

render()





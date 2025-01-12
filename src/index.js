import { Player } from "./player";
import { Game } from "./game.js";
import style from "./style.css";
import { Computer } from "./computer.js";
import { GAMEMODES } from "./constants.js";

function render() {
  let gameContainer = document.querySelector("body");
  const myPlayer = new Player("Player");
  const computerPlayer = new Computer("XLR8");

  let currentGame = Game(
    myPlayer,
    computerPlayer,
    gameContainer,
    GAMEMODES.COMPUTER
  );
  currentGame.initializePlayers();
  currentGame.setupPhase(GAMEMODES.COMPUTER).then(() => {
    console.log("Set up done. Game start!");
    
    // Next step is to do the attacks
    currentGame.attackPhase().then(() => {
      console.log(`Woohoo!`);
    });
  });
}

render();

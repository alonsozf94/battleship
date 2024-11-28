import { Player } from "./player";
import { Game } from "./game.js";
import style from "./style.css";
import { playerUI } from "./ui/player_ui.js";
import { Computer } from "./computer.js";
import { GAMEMODES } from "./constants.js";

function render() {
  const playerYudai = new Player("Yudai");
  // const playerAlonso = new Player('Alonso');
  const computerPlayer = new Computer("XLR8");
  // let playerYudaiScreen = playerUI(document.querySelector('body'),playerYudai);

  // playerYudai.opponent = computerPlayer;
  // computerPlayer.opponent = playerYudai;

  // computerPlayer.autoAttack();
  // computerPlayer.autoAttack();
  // computerPlayer.autoAttack();

  let currentGame = Game(
    playerYudai,
    computerPlayer,
    document.querySelector("body"),
    GAMEMODES.COMPUTER
  );
  currentGame.initializePlayers();
  currentGame.setupPhase(GAMEMODES.COMPUTER).then(() => {
    console.log("Both players have positioned their ships. Starting the game!");

    // Make this in the game factory function
    // playerYudai.attack(0,0);
    // playerYudaiScreen.renderUI();

    // Next step is to do the attacks
    currentGame.attackPhase().then(() => {
      console.log(`Woohoo!`);
    });
  });
}

render();

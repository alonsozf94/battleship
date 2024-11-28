import { playerUI } from "./ui/player_ui";
import { Battleship } from "./battleship";
import { SHIPS, DIRECTIONS, CODES, GAMEMODES } from "./constants";

function Game(player1, player2, container, gamemode) {
  // Create both player screens for rendering
  // Get UI containers
  let player1Screen = playerUI(container, player1);
  let player2Screen = playerUI(container, player2);
  return {
    initializePlayers() {
      player1.opponent = player2;
      player2.opponent = player1;
    },
    setupPhase() {
      return new Promise((resolve) => {
        // Renders player 1 screen
        player1Screen.renderUI();

        // Use attachCoordinateListeners and wait for both players to be ready
        this.activateBoardForSetup(player1, player1Screen, (p1) => {
          // After first player finished positioning ships
          // Renders second screen
          console.log(`${p1.name} ready`);
          if (gamemode === GAMEMODES.HUMAN) {
            player2Screen.renderUI();
            this.activateBoardForSetup(player2, player2Screen, (p2) => {
              // After second player finished positioning ships
              console.log(`${p2.name} ready`);
              player1Screen.renderUI();
            });
          } else if (gamemode === GAMEMODES.COMPUTER) {
            console.log(`Setting up Computer`);
            player2.setupBattleShips();
            player2Screen.renderUI();
          }
          resolve();
        });
      });
    },
    activateBoardForSetup(player, playerScreen, onShipsReady) {
      // Get UI containers
      let board = container.querySelector(".player-board");
      let coordinateList = board.querySelectorAll(".coordinate");

      coordinateList.forEach((coord) => {
        coord.addEventListener("click", () => {
          if (player.ships.length < 5) {
            let shipToAdd = Object.values(SHIPS)[player.ships.length];
            let newShip = new Battleship(
              shipToAdd,
              { x: coord.dataset.x, y: coord.dataset.y },
              DIRECTIONS.VERTICAL
            );
            player.addBattleship(newShip);
            playerScreen.renderUI();

            if (player.ships.length === 5) {
              onShipsReady(player);
            } else {
              // Use bind to ensure proper context if needed
              this.activateBoardForSetup.bind(this)(
                player,
                playerScreen,
                onShipsReady
              );
            }
          }
        });
      });
    },
    attackPhase() {
      return new Promise((resolve) => {
        player1Screen.renderUI();
        this.activateBoardForAttacking(player1, player1Screen, (p1) => {
          console.log(`${p1.name} attacked`);
          player2Screen.renderUI();
          if (player2.isDefeated) {
            console.log(`Game Over!`);
            resolve();
          } else {
            if (gamemode === GAMEMODES.HUMAN) {
              this.activateBoardForAttacking(player2, player2Screen, (p2) => {
                console.log(`${p2.name} attacked`);
                if (player1.isDefeated) {
                  console.log(`Game Over!`);
                  resolve();
                } else this.attackPhase();
              });
            } else if (gamemode === GAMEMODES.COMPUTER) {
              player2.autoAttack();
              if (player1.isDefeated) {
                console.log(`Game Over!`);
                resolve();
              } else this.attackPhase();
            }
          }
        });
      });
    },
    activateBoardForAttacking(player, playerScreen, onAttackSuccessful) {
      // Get UI containers
      let board = container.querySelector(".opponent-board");
      let coordinateList = board.querySelectorAll(".coordinate");

      coordinateList.forEach((coord) => {
        coord.addEventListener("click", () => {
          console.log(typeof coord.dataset.x);

          if (player.attack(coord.dataset.x, coord.dataset.y))
            onAttackSuccessful(player);
          else
            this.activateBoardForAttacking(
              player,
              playerScreen,
              onAttackSuccessful
            );
        });
      });
    },
  };
}

export { Game };

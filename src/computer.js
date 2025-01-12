import { Battleship } from "./battleship";
import { DIRECTIONS, MARKS, SHIPS } from "./constants";
import { Player } from "./player";

class Computer extends Player {
  // You have to create a list of stored moves and then for every attack store the last two moves
  // If the attack hit a ship then:
  // You will check nearby coordinates (elaborate on this)
  constructor() {
    super("Computer");
    this.moveList = [];
  }
  setupBattleShips() {
    while (this.ships.length < 5) {
      let randomShipPosition = this.randomizeData();
      let shipToAdd = Object.values(SHIPS)[this.ships.length];
      let newShip = new Battleship(
        shipToAdd,
        { x: randomShipPosition.x, y: randomShipPosition.y },
        randomShipPosition.direction
      );

      super.addBattleship(newShip);
    }
  }
  randomizeData() {
    let randX = Math.floor(Math.random() * 9);
    let randY = Math.floor(Math.random() * 9);
    let randDirection = Math.floor(Math.random() * 2)
      ? DIRECTIONS.HORIZONTAL
      : DIRECTIONS.VERTICAL;
    return {
      x: randX,
      y: randY,
      direction: randDirection,
    };
  }
  autoAttack() {
    let result = false;

    if (this.moveList.length == 0) {
      result = this.randomAttack();
    } else {
      result = this.areaAttack();
    }
    return result;
  }
  showGame() {
    super.showGame();
    console.log(this.moveList);
  }

  // Attack Functions
  randomAttack() {
    let attackCoordinate = {
      x: this.randomizeData().x,
      y: this.randomizeData().y,
    };
    let attackResult = super.attack(attackCoordinate.x, attackCoordinate.y);
    if (attackResult !== false) {
      attackCoordinate.result = attackResult;
      this.moveList.push(attackCoordinate);
    }
    return attackResult;
  }
  areaAttack() {
    let attackResult = false;
    let movesLength = this.moveList.length;
    let lastAttack =
      this.moveList.length > 0 ? this.moveList[movesLength - 1] : null;

    // Code for later

    if (lastAttack.result.mark === MARKS.HIT) {
      let attackCoordinate = {
        x: lastAttack.x - 1,
        y: lastAttack.y,
      };

      attackResult = super.attack(attackCoordinate.x, attackCoordinate.y);
      attackCoordinate.result = attackResult;
      this.moveList.push(attackCoordinate);
      return attackResult;
    } else {
      attackResult = this.randomAttack();
      return attackResult;
    }
  }
}

export { Computer };

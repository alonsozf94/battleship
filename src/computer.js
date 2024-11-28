import { Battleship } from "./battleship";
import { DIRECTIONS, SHIPS } from "./constants";
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
    if (this.moveList.length == 0) {
      console.log(`First ${this.name} attack`);

      let attackCoordinate = {
        x: this.randomizeData().x,
        y: this.randomizeData().y,
      };
      let attackResult = super.attack(attackCoordinate.x, attackCoordinate.y);
      attackCoordinate.result = attackResult;
      this.moveList.push(attackCoordinate);
    } else {
      console.log(`${this.name} attack`);
      let attackCoordinate = {
        x: this.randomizeData().x,
        y: this.randomizeData().y,
      };
      let attackResult = super.attack(attackCoordinate.x, attackCoordinate.y);
      attackCoordinate.result = attackResult;
      this.moveList.push(attackCoordinate);
    }
    //  Now make the AI attack and do the thinking
  }
  showGame() {
    super.showGame();
    console.log(this.moveList);
  }
}

export { Computer };

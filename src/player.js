import { Gameboard } from "./gameboard";
import { DIRECTIONS, MARKS } from "./constants";

class Player {
  constructor(name, shipArray) {
    this._name = name;
    this._board = new Gameboard();
    this._ships = [];
    this._isDefeated = false;
    this._opponent = undefined;
  }

  // Getter & Setter
  get name() {
    return this._name;
  }
  get board() {
    return this._board;
  }
  get ships() {
    return this._ships;
  }
  get isDefeated() {
    return this._isDefeated;
  }
  set isDefeated(value) {
    this._isDefeated = value;
  }
  get opponent() {
    return this._opponent;
  }
  set opponent(value) {
    this._opponent = value;
  }
  // Functions
  addBattleship(newShip) {
    this.ships.forEach((ship) => {
      if (ship.name === newShip.name) {
        // console.log(`${ship.name} already exists`);
        return false;
      }
    });

    if (this.board.placeBattleship(newShip)) {
      // console.log(`${newShip.name} placed`);
      this._ships.push(newShip);
    } else {
      // console.log(`Can't place ${newShip.name}`);
      return false;
    }
  }
  attack(x, y) {
    console.log(`==${this.name}'s Attack==`);
    console.log(
      `⚔️ ${this.name} attacked ${this.opponent.name} at (${x},${y})`
    );
    let shot = this.opponent.board.receiveHit(x, y);
    if (shot == false) {
      console.log(`Shot missed by ${this.name} at ${x},${y}`);
      return shot;
    } else {
      if (shot.mark === MARKS.HIT) {
        this.opponent.ships.forEach((ship) => {
          let hitRes = ship.getHit(x, y);
          this.opponent.updateStatus()
          console.log(`Hit Result: ${hitRes}`);
        });
      }
      return shot;
    }
  }
  updateStatus() {
    if (this.ships.every((ship) => ship.isSunk === true)) {
      this.isDefeated = true
    };
  }
  showGame() {
    console.log(`==-==`);
    console.log(`Player ${this.name}`);
    console.log(`==-==`);
    this.ships.forEach((ship) => {
      console.log(
        `${this.name}'s ${ship.name} status is ${
          ship.isSunk ? "sunk" : "afloat"
        }`
      );
    });
    this.board.renderBoard();
  }
}

export { Player };

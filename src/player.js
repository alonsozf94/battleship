import { Gameboard } from "./gameboard";
import { DIRECTIONS, MARKS } from "./constants";

class Player {
  constructor(name, shipArray) {
    this._name = name;
    console.log(`Setting ${name}'s board...`);
    this._board = new Gameboard();
    // if (shipArray != null) {
    //   this._ships = shipArray.forEach((ship) => {
    //     this.addBattleship(ship);
    //   });
    // } else
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
        console.log(`${ship.name} already exists`);
        return false;
      }
    });

    if (this.board.placeBattleship(newShip)) {
      console.log(`${newShip.name} placed`);
      this._ships.push(newShip);
    } else {
      console.log(`Can't place ${newShip.name}`);
      return false;
    }
  }
  attack(x, y) {
    console.log(`====================================================`);
    console.log(
      `Player ${this.name} is attacking player ${this.opponent.name} at position (${x},${y})`
    );
    if (this.opponent.board.receiveHit(x, y) != false) {
      this.opponent.ships.forEach((ship) => {
        ship.getHit(x, y);
        this.checkStatus();
      });
      return true;
    } else return false;
  }
  checkStatus() {
    if (this.ships.every((ship) => ship.isSunk == true)) {
      console.log(`${this.name} lost`);
      this.isDefeated = true;
    } else {
      console.log(`${this.name} is on the game`);
    }
  }
  showGame() {
    console.log(`====================================================`);
    console.log(`Player ${this.name}`);
    console.log(`====================================================`);
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

import { Coordinate } from "./coordinate";
import { DIRECTIONS, MARKS } from "./constants";

class Gameboard {
  constructor() {
    this._board = this.buildBoard();
  }
  get board() {
    return this._board;
  }
  buildBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i].push(new Coordinate(i, j));
      }
    }
    return board;
  }
  placeBattleship(ship) {
    let startX = parseInt(ship.startPos.x);
    let startY = parseInt(ship.startPos.y);
    for (let i = 0; i < ship.length; i++) {
      if (ship.direction == DIRECTIONS.HORIZONTAL) {
        if (startY + ship.length > 9) {
          console.log("Out of bounds!");
          return false;
        } else if (
          this.verifyIfFree(
            startX,
            startY + i,
            ship.length - i,
            ship.direction,
            ship.name
          )
        )
          this._board[startX][startY + i].mark = MARKS.SHIP;
        else {
          return false;
        }
      } else if (ship.direction == DIRECTIONS.VERTICAL) {
        if (startX + (ship.length - 1) > 9) {
          console.log(`Out of bounds! ${startX + ship.length}`);
          return false;
        } else if (
          this.verifyIfFree(
            startX + i,
            startY,
            ship.length - i,
            ship.direction,
            ship.name
          )
        )
          this._board[startX + i][startY].mark = MARKS.SHIP;
        else {
          return false;
        }
      }
    }
    ship.generateCoordinates();
    return true;
  }
  receiveHit(x, y) {
    let target = this._board[parseInt(x)][parseInt(y)];
    if (target.mark === MARKS.FREE) {
      // If hits open square
      console.log("No ship! Marked!");
      this._board[x][y].mark = MARKS.MARKED;
    } else if (target.mark === MARKS.SHIP) {
      // If it hits a ship
      // Add hit logic here
      console.log("Ship hit!");
      this._board[x][y].mark = MARKS.HIT;
      return this._board[x][y];
    } else if (target.mark === MARKS.HIT || target.mark === MARKS.MARKED) {
      // If hits square alredy hit
      console.log("Already marked");
      return false;
    }
  }
  renderBoard() {
    this._board.forEach((row) => {
      let rowString = "| ";
      for (let i = 0; i < row.length; i++) {
        rowString += `${row[i].mark} | `;
      }
      console.log(rowString);
      console.log("- - - - - - - - - - - - - - - - - - - - -");
    });
  }
  // Validators
  verifyIfFree(x, y, length, direction, name = "ship") {
    for (let j = 0; j < length; j++) {
      if (direction == DIRECTIONS.HORIZONTAL) {
        if (this._board[x][y + j].mark === MARKS.SHIP) {
          return false;
        }
      } else if (direction == DIRECTIONS.VERTICAL) {
        if (this._board[x + j][y].mark === MARKS.SHIP) {
          return false;
        }
      }
    }
    return true;
  }
}
export { Gameboard };

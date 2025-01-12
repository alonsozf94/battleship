import { DIRECTIONS, MARKS, SHIPS } from "./constants";
import { Coordinate } from "./coordinate";

class Battleship {
  constructor(type, startPos, direction = DIRECTIONS.HORIZONTAL) {
    this._name = type.name;
    this._startPos = new Coordinate(parseInt(startPos.x), parseInt(startPos.y));
    this._length = type.length;
    this._direction = direction;
    this._coordinates = [];
    this._hitPoints = type.length;
    this._isSunk = false;
  }

  // Getters and Setters
  get name() {
    return this._name;
  }
  get startPos() {
    return this._startPos;
  }
  get length() {
    return this._length;
  }
  get direction() {
    return this._direction;
  }
  get coordinates() {
    return this._coordinates;
  }
  get hitPoints() {
    return this._hitPoints;
  }
  set hitPoints(value) {
    this._hitPoints = value;
  }
  get isSunk() {
    return this._isSunk;
  }
  set isSunk(value) {
    this._isSunk = value;
  }

  // Actions
  shipInfo() {
    console.log(
      `Ship: ${this.name} | Size: ${this.length} | HP: ${
        this.hitPoints
      } Coords: ${JSON.stringify(this.coordinates)} | Status: ${
        this.isSunk ? "Sunk" : "Floating"
      }`
    );
  }
  generateCoordinates() {    
    for (let i = 0; i < this.length; i++) {
      if (this.direction === DIRECTIONS.HORIZONTAL) {
        this._coordinates.push(
          new Coordinate(this.startPos.x, this.startPos.y + i, MARKS.SHIP)
        );
      } else if (this.direction === DIRECTIONS.VERTICAL) {
        this._coordinates.push(
          new Coordinate(this.startPos.x + i, this.startPos.y, MARKS.SHIP)
        );
      }
    }    
  }
  getHit(x, y) {
    
    this.coordinates.forEach((coord) => {
      // // Here's the problem
      // console.log(`Checking (${coord.x},${coord.y})`);
      // console.log(`(${typeof coord.x},${typeof coord.y})`);
      // console.log(`(${typeof x},${typeof y})`);
            
      if (coord.x === Number(x) && coord.y === Number(y)) {
        this.hitPoints = this.hitPoints - 1;
        coord.mark = MARKS.HIT;
        if (this.hitPoints <= 0) this.isSunk = true;
        return true;
      } else return false;
    });
  }
  showHP() {
    console.log(`${this.name}'s hit points are ${this.hitPoints}`);
  }
}

export { Battleship };

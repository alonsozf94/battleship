import { MARKS } from "./constants";

class Coordinate {
  constructor(x, y, mark = MARKS.FREE) {
    this._x = x;
    this._y = y;
    this._mark = mark;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get mark() {
    return this._mark;
  }
  set mark(value) {
    this._mark = value;
  }
}

export {Coordinate}
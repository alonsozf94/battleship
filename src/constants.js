const MARKS = (() => {
  return {
    FREE: 'F',
    SHIP: 'S',
    MARKED: 'M',
    HIT: 'H'
  }
})();

const DIRECTIONS = (() => {
  return {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal'
  }
})();

const SHIPS = (() => {
  return {
    CARRIER: {name: 'Carrier', length: 5},
    BATTLESHIP: {name: 'Battleship', length: 4},
    CRUISER: {name: 'Cruiser', length: 3},
    SUBMARINE: {name: 'Submarine', length: 2},
    DESTROYER: {name: 'Destroyer', length: 1},
  }
})();

export {MARKS, DIRECTIONS, SHIPS}
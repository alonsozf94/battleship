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
    SUBMARINE: {name: 'Submarine', length: 3},
    DESTROYER: {name: 'Destroyer', length: 2},
  }
})();

const PLAYERS = (() => {
  return {
    PLAYER: 'Player',
    OPPONENT: 'Opponnent'
  }
})();

const GAMEMODES = (() => {
  return {
    HUMAN: 'Human',
    COMPUTER: 'Computer'
  }
})();

export {MARKS, DIRECTIONS, SHIPS, PLAYERS, GAMEMODES}
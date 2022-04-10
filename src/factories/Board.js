import CreateShip from './Ship';

// refractor this into game logic
import { updateCell } from '../View/UI';

const CreateBoard = (size = 10, boardNumber) => {
  const fleet = [];
  let shipLife = 20;

  // 1 = ship, 2 = neighbored a ship, 3 = empty -1,-2,-3 means received attack
  const boardStatus = [];
  // find ways for better implemetation using higher order function
  for (let i = 0; i < size; i++) {
    boardStatus.push([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
  }

  const placeShip = (length, isVertical, startPosition) => {
    if (validatePosition(length, isVertical, startPosition)) {
      fleet.push(CreateShip(length, isVertical, startPosition));
      return true;
    }
    return false;
  };

  // has side effects
  const receiveAttack = (inPosition) => {
    const [xTemp, yTemp] = inPosition;
    const xIn = parseInt(xTemp);
    const yIn = parseInt(yTemp);

    // validate attack here
    if (boardStatus[xIn][yIn] < 0) return false;
    else if (boardStatus[xIn][yIn] == 1) {
      shipLife--;
    }
    boardStatus[xIn][yIn] = - boardStatus[xIn][yIn];
    // hit all the ships with the inPosition
    // didn't use forEach because I need it to stop when it hits 
    let status;
    for (let i = 0; i < fleet.length; i++) {
      status = fleet[i].hit(inPosition);
      if (status) {
        if (fleet[i].isSunk()) updateCell('sunk', fleet[i].positions, boardNumber);
        else updateCell('hit', inPosition, boardNumber);
        break;
      }
    }
    if (!status) updateCell('missed', inPosition, boardNumber);
    
    return true;
  };

  const getShipLifeCount = () => shipLife;

  function validatePosition(length, isVertical, startPosition) {
    let [x, y] = startPosition;
    const edgeX = isVertical ? x : x + length - 1;
    const edgeY = isVertical ? y - length + 1 : y;

    if (edgeX > size - 1 || edgeX < 0 || edgeY > size - 1 || edgeY < 0) return false;

    // push positions
    let a = 0;
    while (a < length) {
      // you can add check if it's neighboring a ship here
      if (boardStatus[x][y] == 1) return false;
      boardStatus[x][y] = 1;
      a++;
      // if vertical moves upward and if not moves to the right
      if (isVertical) y--;
      else x++;
    }
    return true;
  }

  return Object.freeze({
    receiveAttack,
    placeShip,
    getShipLifeCount,
  });
};

export default CreateBoard;

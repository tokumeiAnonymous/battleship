const CreateBoard = (size = 10) => {

  const placeShip = (length, isVertical, startPosition) => {
    
    let [x, y] = startPosition;
    const edgeX = isVertical? x : (x + length - 1);
    const edgeY = isVertical? (y - length + 1) : y;
    // 9 is from the size of the board
    if (edgeX > size - 1 || edgeX < 0 || edgeY > size - 1 || edgeY < 0) return false;
    
    // Create ship here or outside?
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
  let shipLife = 20;

  // 1 = ship, 2 = neighbored a ship, 3 = empty -1,-2,-3 means received attack
  const boardStatus = [];
  // find ways for better implemetation using higher order function
  for (let i = 0; i < size; i++) {
    boardStatus.push([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
  }

  // has side effects
  const receiveAttack = (inPosition) => {
    const [ xIn, yIn] = inPosition;

    // validate attack here
    if (boardStatus[xIn][yIn] < 0) return false;
    
    else if (boardStatus[xIn][yIn] == 1) {
      shipLife--;
    }
    boardStatus[xIn][yIn] = - (boardStatus[xIn][yIn]);
    return true;
  }

  const getShipLifeCount = () => shipLife;

  return Object.freeze({ receiveAttack, placeShip, getShipLifeCount });
}

export default CreateBoard;
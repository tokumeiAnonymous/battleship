const CreateBoard = (ships) => {
  const shipPositions = [].concat(...(ships.map(ship => ship.getPositions())));
  let shipLife = 20;

  // 1 = ship, 2 = neighbored a ship, 3 = empty -1,-2,-3 means received attack
  const boardStatus = [];
  // find ways for better implemetation using higher order function
  for (let i = 0; i < 10; i++) {
    boardStatus.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  }

  shipPositions.forEach( ([x, y]) => {
    boardStatus[x][y] = 1;
    // update neighbor here

  });

  // has side effects
  const receiveAttack = (inPosition) => {
    const [ xIn, yIn] = inPosition;

    // validate attack here
    if (boardStatus[xIn][yIn] < 0) return false;
    
    else if (boardStatus[xIn][yIn] == 1) {
      shipLife--;
      boardStatus[xIn][yIn] = - (boardStatus[xIn][yIn]);
    }
    return true;
  }

  const getShipLifeCount = () => shipLife;

  return Object.freeze({ receiveAttack, getShipLifeCount });
}

export default CreateBoard;
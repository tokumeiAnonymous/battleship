const CreateBoard = (ships) => {
  const shipPositions = [].concat(...(ships.map(ship => ship.getPositions())));
  let shipLife = 20;

  // has side effects
  const receiveAttack = (inPosition) => {
    const [ xIn, yIn] = inPosition;
    
    const isHit = shipPositions.find(element => {
      const [x, y] = element;
      return (x == xIn && y == yIn);
    });
    if (isHit) shipLife--;
  }

  const getShipLifeCount = () => shipLife;

  return Object.freeze({ receiveAttack, getShipLifeCount });
}

export default CreateBoard;
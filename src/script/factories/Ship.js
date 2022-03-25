const CreateShip = (length, isVertical, startPoint) => {
  let life = length;

  let [x, y] = startPoint;
  const positionArray = [];
  let a = 0;
  while (a < length) {
    positionArray.push([x, y]);
    a++;
    // if vertical moves upward and if not moves to the right
    if (isVertical) y--;
    else x++;
  }

  const getPositions = () => {
    return positionArray;
  }

  // this function has side effects
  const hit = (inPoint) => {
    const [xIn, yIn] = inPoint;
    const pos = getPositions();
    
    const isHit = pos.find(element => {
      const [x, y] = element;
      return (xIn == x && yIn == y);
    });

    if (isHit) life--;
    
    return life;
  }
  
  const isSunk = () => life == 0;

  return Object.freeze({ isSunk, hit, getPositions });
}

export default CreateShip;
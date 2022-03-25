const CreateShip = (length, isVertical, startPoint) => {
  let life = length;

  let [x, y] = startPoint;
  const positions = [];
  let a = 0;
  while (a < length) {
    positions.push([x, y]);
    a++;
    // if vertical moves upward and if not moves to the right
    if (isVertical) y--;
    else x++;
  }

  // this function has side effects
  const hit = (inPoint) => {
    const [xIn, yIn] = inPoint;
    const pos = positions;
    
    const isHit = pos.find(element => {
      const [x, y] = element;
      return (xIn == x && yIn == y);
    });

    if (isHit) life--;
    
    return life;
  }
  
  const isSunk = () => life == 0;

  return Object.freeze({ isSunk, hit, positions });
}

export default CreateShip;
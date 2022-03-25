import CreateBoard from '../factories/Board';
// import CreateShip from '../factories/Ship';
import { ships } from '../Sandbox/ship.sandbox'

test('Create board and empty it', () => {
  // @param size and ships
  const boardA = CreateBoard(ships);
  
  const shipPositions = [].concat(...(ships.map(ship => ship.getPositions())));

  shipPositions.forEach(element => boardA.receiveAttack(element));

  expect(boardA.getShipLifeCount()).toBe(0);

});

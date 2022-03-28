import CreateBoard from '../factories/Board';
// import CreateShip from '../factories/Ship';
import { shipParams, shipPositions } from '../Sandbox/ship.sandbox'

test('Create board and empty it', () => {
  const boardA = CreateBoard();
  shipParams.forEach( ({length, isVertical, startPos}) => boardA.placeShip(length, isVertical, startPos));
  
  shipPositions.forEach(element => boardA.receiveAttack(element));

  expect(boardA.getShipLifeCount()).toBe(0);
});

test('If it receives duplicate attack', () => {
  const boardB = CreateBoard();
  expect(boardB.receiveAttack([0, 0])).toBe(true);
  expect(boardB.receiveAttack([0, 0])).toBe(false);
});

test('If it receives out of bounds or intercepting ships', () => {
  const boardC = CreateBoard();
  expect(boardC.placeShip(4, true, [5, 5])).toBe(true);
  expect(boardC.placeShip(4, true, [5, 1])).toBe(false);
  expect(boardC.placeShip(4, false, [5, 4])).toBe(false);
});

import CreateBoard from '../factories/Board';
// import CreateShip from '../factories/Ship';
import { ships } from '../Sandbox/ship.sandbox'

test('Create board and empty it', () => {
  const boardA = CreateBoard();
  ships.forEach( ship => boardA.placeShip(ship));
  const shipPositions = [].concat(...(ships.map(ship => ship.positions)));

  shipPositions.forEach(element => boardA.receiveAttack(element));

  expect(boardA.getShipLifeCount()).toBe(0);

});

test('If it receives duplicate attack', () => {
  const boardB = CreateBoard();
  expect(boardB.receiveAttack([0, 0])).toBe(true);
  expect(boardB.receiveAttack([0, 0])).toBe(false);
});

test('If it receives out of bounds or duplicate ship positions', () => {
  const boardC = CreateBoard();
});

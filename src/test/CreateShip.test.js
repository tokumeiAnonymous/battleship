import CreateShip from '../factories/Ship'


test('Create ship and sink it', () => {
  // @param length, isVertical, startPosition
  const shipA = CreateShip(4, true, [5, 5]);
  expect(shipA.isSunk()).toBe(false);
  shipA.hit([5, 5]);
  shipA.hit([5, 4]);
  shipA.hit([5, 3]);
  shipA.hit([5, 2]);
  expect(shipA.isSunk()).toBe(true);
});

// no need to test hit with same spot since board won't allow it

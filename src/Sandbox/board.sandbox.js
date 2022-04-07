import CreateBoard from '../factories/Board';
import { shipParams } from './ship.sandbox';

// @ param size and board number
const board1 = CreateBoard(10, 1);
const board2 = CreateBoard(10, 2);

shipParams.forEach((element) => {
  const {length, isVertical, startPos} = element;
  board1.placeShip(length, isVertical, startPos);
  board2.placeShip(length, isVertical, startPos);
})

export { board1, board2 };
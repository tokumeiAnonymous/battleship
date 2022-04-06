import CreateBoard from '../factories/Board';
import { shipParams } from './ship.sandbox';

const board1 = CreateBoard();
const board2 = CreateBoard();

shipParams.forEach((element) => {
  const {length, isVertical, startPos} = element;
  board1.placeShip(length, isVertical, startPos);
  board2.placeShip(length, isVertical, startPos);
})

export { board1, board2 };
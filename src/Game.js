import { board1, board2 } from './Sandbox/board.sandbox';
import { showWinner } from './View/UI';

function StartGame() {
  AddEventListener();
}

function AddEventListener() {
  const board = document.querySelector('.board-holder');
  board.addEventListener('click', (e) => {
    if (e.target.parentNode.getAttribute('data-board') != '2') return;
    const pos = [];
    pos.push(e.target.getAttribute('data-x'));
    pos.push(e.target.getAttribute('data-y'));
    // updates the status board
    board2.receiveAttack(pos);
    console.log(board2.getShipLifeCount());
    if (board2.getShipLifeCount() == 0) showWinner('Player 1');
    // @param is board size
    let status = false;
    while (!status) {
      status = board1.receiveAttack(aiTurn(10));
    }
    if (board1.getShipLifeCount() == 0) showWinner('Player 2');
  })
}

function aiTurn(max) {
  const coordinate = [];
  coordinate.push(Math.floor(Math.random() * max));
  coordinate.push(Math.floor(Math.random() * max));
  console.log(coordinate);
  return coordinate;
}

export default StartGame;
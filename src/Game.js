import { board1, board2 } from './Sandbox/board.sandbox';
import { showWinner } from './View/UI';
import { aiTurn } from './factories/AI'

function StartGame() {
  AddAttackEventListener();
}

function AddAttackEventListener() {
  const board = document.querySelector('.board-holder');
  board.addEventListener('click', handleAttack);
}

function handleAttack(e) {
    if (e.target.parentNode.getAttribute('data-board') != '2') return;
    const pos = [];
    const coordinate = e.target.getAttribute('data-coordinate');
    pos.push(coordinate.charAt(0));
    pos.push(coordinate.charAt(coordinate.length - 1));
    // updates the status board
    if (!board2.receiveAttack(pos)) return;
    if (board2.getShipLifeCount() == 0) {
      showWinner('Player 1');
      RemoveAttackEventListener();
    }
    // @param is board size
    let status = false;
    while (!status) {
      status = board1.receiveAttack(aiTurn(10));
    }
    if (board1.getShipLifeCount() == 0) {
      showWinner('Player 2');
      RemoveAttackEventListener();
    }
}

function RemoveAttackEventListener() {
  const board = document.querySelector('.board-holder');
  board.removeEventListener('click', handleAttack);
}

export default StartGame;
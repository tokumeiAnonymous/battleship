import '../View/UI.css';

function CreateBoard( boardNumber ) {

  const board = document.createElement('div');
  board.classList.add('board');
  board.setAttribute('data-board', boardNumber);

  for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-x', j);
      cell.setAttribute('data-y', i);
      board.appendChild(cell);
    }
  }

  return board;
}

const CreateMain = () => {
  const body = document.querySelector('body');

  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  body.appendChild(mainContent);
}

const CreateBoardUI = () => {

  const mainContent = document.querySelector('.main-content');
  const boardHolder = document.createElement('div');
  boardHolder.classList.add('board-holder');
  mainContent.appendChild(boardHolder);

  boardHolder.appendChild(CreateBoard(1));
  boardHolder.appendChild(CreateBoard(2));

}

const showWinner = (winner) => {
  console.log(winner);
}
/*
function updateCell(status, inPosition) {
  const [x, y] = inPosition;
  // three querySelector board* > x > y
  const cell = document.querySelector(`[data-x = ${x}]`)

  cell.classList.add(status);
}
*/
export { CreateMain, CreateBoardUI, showWinner,};
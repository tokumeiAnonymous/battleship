import '../View/style.css';

function CreateBoard( boardNumber ) {

  const board = document.createElement('div');
  board.classList.add('board');
  board.setAttribute('data-board', boardNumber);

  for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-coordinate', j + ', ' + i);
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

const CreateMessageHolder = () => {
  const messageHolder = document.createElement('div');
  messageHolder.classList.add('message-holder');
  const main = document.querySelector('.main-content');
  main.appendChild(messageHolder);
}

const showWinner = (winner) => {
  const messageHolder = document.querySelector('.message-holder');
  messageHolder.innerText = `${winner} wins!`;
}

function updateCell(status, inPosition, boardNumber) {
  if (status == 'sunk') {
    inPosition.forEach(position => {
      const [x, y] = position;
      const board = document.querySelector(`[data-board = '${boardNumber}']`);
      const cell = board.querySelector(`[data-coordinate = '${x}, ${y}']`);
      cell.classList.add(status);
    });
  } else {
      const [x, y] = inPosition;
      const board = document.querySelector(`[data-board = '${boardNumber}']`);
      const cell = board.querySelector(`[data-coordinate = '${x}, ${y}']`);
      cell.classList.add(status);
  }
}

export { CreateMain, CreateBoardUI, showWinner, updateCell, CreateMessageHolder };
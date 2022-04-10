import "../View/style.css";

function CreateBoard(boardNumber) {
  const board = document.createElement("div");
  board.classList.add("board");
  board.setAttribute("data-board", boardNumber);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-coordinate", j + ", " + i);
      board.appendChild(cell);
    }
  }
  return board;
}

const CreateMain = () => {
  const body = document.querySelector("body");

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  body.appendChild(mainContent);
};

const CreateBoardUI = () => {
  const mainContent = document.querySelector(".main-content");
  const boardHolder = document.createElement("div");
  boardHolder.classList.add("board-holder");
  mainContent.appendChild(boardHolder);

  boardHolder.appendChild(CreateBoard(1));
  boardHolder.appendChild(CreateBoard(2));
};

const CreateMessageHolder = () => {
  const messageHolder = document.createElement("div");
  messageHolder.classList.add("message-holder");
  const main = document.querySelector(".main-content");
  main.appendChild(messageHolder);
};

const showWinner = (winner) => {
  const messageHolder = document.querySelector(".message-holder");
  messageHolder.innerText = `${winner} wins!`;
};

function updateCell(status, inPosition, boardNumber) {
  if (status == "sunk") {
    inPosition.forEach((position) => {
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

function CreateDialog() {
  const dialog = document.createElement("dialog");
  dialog.classList.add('place-ship');
  dialog.appendChild(CreateBoard());
  dialog.appendChild(CreateShipLabel());
  dialog.appendChild(CreateShipDraggable());

  const start = document.createElement('button');
  start.classList.add('start');
  start.innerText = 'Start Game';
  dialog.appendChild(start);

  const main = document.querySelector(".main-content");
  main.appendChild(dialog);
  dialog.showModal();
}

const CreateShipLabel = () => {
  const labelHolder = document.createElement('div');
  labelHolder.classList.add('label-holder');
  for (let i = 4; i > 0; i--) {
    const shipLabel = document.createElement('div');
    shipLabel.setAttribute('data-length', i);
    shipLabel.innerText = i + 'x';
    labelHolder.appendChild(shipLabel);
  }
  return labelHolder;
}

const CreateShipDraggable = () => {
  const fleetHolder = document.createElement('div');
  fleetHolder.classList.add('fleet-holder');
  fleetHolder.appendChild(CreateShipUI(1));
  fleetHolder.appendChild(CreateShipUI(2));
  fleetHolder.appendChild(CreateShipUI(3));
  fleetHolder.appendChild(CreateShipUI(4));

  return fleetHolder;
}

const CreateShipUI = (size) => {
  const shipHolder = document.createElement('div');
  shipHolder.classList.add('ship-holder');
  shipHolder.setAttribute('draggable', true);

  for (let i = 0; i < size; i++){
    const shipPart = document.createElement('div');
    shipPart.classList.add('ship-part');
    shipHolder.appendChild(shipPart);
  }
  return shipHolder;
}

export {
  CreateMain,
  CreateBoardUI,
  showWinner,
  updateCell,
  CreateMessageHolder,
  CreateDialog
};

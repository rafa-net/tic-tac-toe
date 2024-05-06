function createGameBoard(idSuffix) {

  for (let i = 1; i <= 3; i++) {
    let row = document.createElement('div');
    row.className = 'row-' + i;

    for (let j = 0; j < 3; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      row.appendChild(cell);
    }

    gameBoard.appendChild(row);
  }

  return gameBoard;
}

// Create multiple game boards with unique IDs
for (let i = 1; i <= 3; i++) {
  document.body.appendChild(createGameBoard(i));
}
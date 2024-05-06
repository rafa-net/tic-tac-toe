// Declaration of global variables
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let clickSound;
let cells = document.querySelectorAll('.cell');
let cells_ex = document.querySelectorAll('.cell_ex');
let gameText = document.getElementById("status");

// Cell array notation indices order of enumeration
for (let i = 0; i <= 8 && i < cells_ex.length; i++) {
  cells_ex[i].textContent = i;
}

// Check winner
function checkWin(cells) {
  const winningCombinations = [
    [0, 1, 2], // first row
    [3, 4, 5], // second row
    [6, 7, 8], // third row
    [0, 3, 6], // first column
    [1, 4, 7], // second column
    [2, 5, 8], // third column
    [0, 4, 8], // first diagonal
    [2, 4, 6]  // second diagonal
  ];

  for (let combination of winningCombinations) {
    if (cells[combination[0]].textContent !== '' &&
        cells[combination[0]].textContent === cells[combination[1]].textContent &&
        cells[combination[1]].textContent === cells[combination[2]].textContent) {
      return true;
    }
  }
  return false;
}

// Check if all cells are clicked
function areAllCellsClicked(cells) {
  for (let cell of cells) {
    if (cell.textContent === '') {
      return false;
    }
  }
  return true;
}

// Start of something very important with the 'document' and 'DOMContentLoaded' things
document.addEventListener('DOMContentLoaded', function() {
  let currentPlayer = 'X';
  let gameRunning = true; // Assuming game starts running
  gameText.textContent = "X";

  // Audio for clicking on the cells
  fetch('cell-clicked.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      clickSound = audioBuffer;
    });

  // Add event listeners to cells
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      if (!gameRunning) {
        return;
      }

      if (cell.textContent === '') {
        cell.textContent = currentPlayer;

        // Play the click sound
        let source = audioContext.createBufferSource();
        source.buffer = clickSound;
        source.connect(audioContext.destination);
        source.start();

        if (checkWin(cells)) {
          gameText.textContent = `${currentPlayer} WINS!`;
          gameText.className = 'win'; // add 'win' class
          gameRunning = false; // stop the game
        } else {
          // Switch the current player
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          gameText.textContent = `${currentPlayer}'s turn`;
        }
      }
    });
  });

  // Add event listeners to clear buttons
  const clearButtons = document.querySelectorAll('.clear-btn');
  clearButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      cells.forEach(function(cell) {
        cell.textContent = '';
      });

      // Reset the game
      gameRunning = true;
      currentPlayer = 'X'; // Assuming 'X' goes first
      gameText.textContent = `${currentPlayer} WINS!`;
      gameText.className = ''; // remove 'win' class
    });
  });
});
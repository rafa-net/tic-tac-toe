let cells;
let cells_ex;

document.addEventListener('DOMContentLoaded', function() {
  cells = document.querySelectorAll('.cell');
  cells_ex = document.querySelectorAll('.cell-ex');
  const clearButtons = document.querySelectorAll('.clear-btn');
  let currentPlayer = 'X';

  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  });

  clearButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      cells.forEach(function(cell) {
        cell.textContent = '';
      });
    });
  });

  // Example 0.1 Cells - Order of Enumeration
  for (let i = 0; i <= 8 && i < cells_ex.length; i++) {
    cells_ex[i].textContent = i;
  }

  // Example 1 - Vertically
 if (cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent && cells[0].textContent !== '' && cells[1].textContent !== '' && cells[2].textContent !== '') {
   console.log('Winner');
 }
});

 


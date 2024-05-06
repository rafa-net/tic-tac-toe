/* Passing variables as parameters involves defining a function that takes one or more parameters, and then calling that function with the variables you want to pass as arguments.

In your case, if you have a function that needs to use the cells and cells_ex variables, you could define that function to take two parameters, and then pass cells and cells_ex as arguments when you call the function.

Here's an example of how you could do this: */

document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('.cell');
  const cells_ex = document.querySelectorAll('.cell-ex');
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
  enumerateCells(cells_ex);

  // Example 1 - Vertically
  checkWinner(cells);
});

function enumerateCells(cells_ex) {
  for (let i = 0; i <= 8 && i < cells_ex.length; i++) {
    cells_ex[i].textContent = i;
  }
}

function checkWinner(cells) {
  if (cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent && cells[0].textContent !== '' && cells[1].textContent !== '' && cells[2].textContent !== '') {
    console.log('Winner');
  }
}

/* In this code, enumerateCells and checkWinner are functions that take cells_ex and cells as parameters, respectively. These functions are called inside the DOMContentLoaded event listener, with cells_ex and cells passed as arguments. This way, enumerateCells and checkWinner have access to cells_ex and cells, but cells_ex and cells are not global variables. */
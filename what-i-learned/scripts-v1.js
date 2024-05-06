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
        console.log(`Cell 0: '${cells[0].textContent}', Cell 1: '${cells[1].textContent}', Cell 2: '${cells[2].textContent}'`);
      }

      // Check if all cells are filled, permitting the game to end
      let allCellsFilled = Array.from(cells).every(cell => cell.textContent !== '');

      if (allCellsFilled) {
        console.log('All cells are filled');
        let firstCellMatchesSecond = cells[0].textContent === cells[1].textContent;
        let secondCellMatchesThird = cells[1].textContent === cells[2].textContent;
        let firstCellMatchesThird = cells[2].textContent === cells[0].textContent;
        let firstCellNotEmpty = cells[0].textContent !== '';
        let secondCellNotEmpty = cells[1].textContent !== '';
        let thirdCellNotEmpty = cells[2].textContent !== '';
        
        let fourthCellMatchesFifth = cells[3].textContent === cells[4].textContent;
        let fifthCellMatchesSixth = cells[4].textContent === cells[5].textContent;
        let letFirstCellMatchesSixth = cells[5].textContent === cells[3].textContent;
        let fourthCellNotEmpty = cells[3].textContent !== '';
        let fifthCellNotEmpty = cells[4].textContent !== '';
        let sixthCellNotEmpty = cells[5].textContent !== '';

        let seventhCellMatchesEighth = cells[6].textContent === cells[7].textContent;
        let eighthCellMatchesNinth = cells[7].textContent === cells[8].textContent;
        let ninthCellMatchesTenth = cells[8].textContent === cells[6].textContent;
        let seventhCellNotEmpty = cells[6].textContent !== '';
        let eighthCellNotEmpty = cells[7].textContent !== '';
        let ninthCellNotEmpty = cells[8].textContent !== ''

        // Column 1 - Cells 0, 1, 2 - Game Results Test
        if (firstCellMatchesSecond && 
            secondCellMatchesThird && 
            firstCellMatchesThird &&
            firstCellNotEmpty && 
            secondCellNotEmpty && 
            thirdCellNotEmpty &&
        // Column 2 - Cells 3, 4, 5 - Game Results Test
            fourthCellMatchesFifth &&
            fifthCellMatchesSixth &&
            letFirstCellMatchesSixth &&
            fourthCellNotEmpty &&
            fifthCellNotEmpty &&
            sixthCellNotEmpty &&
        // Column 3 - Cells 6, 7, 8 - Game Results Test
            seventhCellMatchesEighth &&
            eighthCellMatchesNinth &&
            ninthCellMatchesTenth &&
            seventhCellNotEmpty &&
            eighthCellNotEmpty &&
            ninthCellNotEmpty) {
          console.log('Winner');
        } else {
          console.log('Something went wrong!');
        }
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
});

 


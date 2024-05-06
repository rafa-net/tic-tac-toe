document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('.cell');
  
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      // Check if the cell is already marked
      if (cell.textContent !== '') {
        return;
      }
      // Determine the current player
      const currentPlayer = document.getElementsByClassName('.current-player');
      if (!currentPlayer) {
        return; // Add a check for currentPlayer existence
      }
      // Mark the cell with the current player's symbol
      cell.textContent = currentPlayer.textContent;
      
      // Switch to the next player
      if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
      } else if (currentPlayer.textContent === 'O') {
        currentPlayer.textContent = 'X';
      }
    });
  })
});
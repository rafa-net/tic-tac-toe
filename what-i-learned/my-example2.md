document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('.cell');
  
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {

  
      const currentPlayer = document.querySelector('.current-player');
      
      cell.textContent = currentPlayer.textContent;
      if (currentPlayer.textContent === '') {
        currentPlayer.textContent = 'X';
      } else if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
      } else if (currentPlayer.textContent === 'O') {
        currentPlayer.textContent = 'X';
      }
    });
  })
});


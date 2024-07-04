document.addEventListener('DOMContentLoaded', () => {
  const boardSize = 5;  // Número de pontos em cada linha e coluna
  const gameBoard = document.getElementById('game-board');
  const player1Score = document.getElementById('player1-score');
  const player2Score = document.getElementById('player2-score');
  const resetButton = document.getElementById('reset-button');
  let currentPlayer = 1;
  let scores = [0, 0];
  let board = Array.from({ length: boardSize * 2 - 1 }, () => Array(boardSize * 2 - 1).fill(null));

  // Cria o tabuleiro
  for (let i = 0; i < boardSize * 2 - 1; i++) {
      for (let j = 0; j < boardSize * 2 - 1; j++) {
          if (i % 2 === 0 && j % 2 === 0) {
              const point = document.createElement('div');
              point.classList.add('point');
              gameBoard.appendChild(point);
          } else if (i % 2 === 0) {
              const hLine = document.createElement('div');
              hLine.classList.add('horizontal-line');
              hLine.dataset.row = i;
              hLine.dataset.col = j;
              hLine.addEventListener('click', handleLineClick);
              gameBoard.appendChild(hLine);
          } else if (j % 2 === 0) {
              const vLine = document.createElement('div');
              vLine.classList.add('vertical-line');
              vLine.dataset.row = i;
              vLine.dataset.col = j;
              vLine.addEventListener('click', handleLineClick);
              gameBoard.appendChild(vLine);
          } else {
              const empty = document.createElement('div');
              empty.style.width = '30px';
              empty.style.height = '30px';
              gameBoard.appendChild(empty);
          }
      }
  }

  function handleLineClick(event) {
      const line = event.target;
      const row = parseInt(line.dataset.row);
      const col = parseInt(line.dataset.col);

      if (line.classList.contains('active')) return;

      line.classList.add('active');
      board[row][col] = currentPlayer;

      let pointsGained = checkForSquares(row, col);
      if (pointsGained > 0) {
          scores[currentPlayer - 1] += pointsGained;
          updateScores();
      } else {
          currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
  }

  function checkForSquares(row, col) {
      let points = 0;

      if (row % 2 === 0) {  // Linha horizontal
          if (row > 0 && isSquareCompleted(row - 1, col)) points++;
          if (row < boardSize * 2 - 2 && isSquareCompleted(row + 1, col)) points++;
      } else {  // Linha vertical
          if (col > 0 && isSquareCompleted(row, col - 1)) points++;
          if (col < boardSize * 2 - 2 && isSquareCompleted(row, col + 1)) points++;
      }

      return points;
  }

  function isSquareCompleted(row, col) {
      if (row % 2 === 0) {  // Linha horizontal
          return board[row - 1]?.[col] !== undefined &&
                 board[row + 1]?.[col] !== undefined &&
                 board[row - 1][col + 1] !== undefined &&
                 board[row + 1][col + 1] !== undefined;
      } else {  // Linha vertical
          return board[row]?.[col - 1] !== undefined &&
                 board[row]?.[col + 1] !== undefined &&
                 board[row - 1]?.[col - 1] !== undefined &&
                 board[row + 1]?.[col + 1] !== undefined;
      }
  }

  function updateScores() {
      player1Score.textContent = scores[0];
      player2Score.textContent = scores[1];
  }

  resetButton.addEventListener('click', resetGame);

  function resetGame() {
      document.querySelectorAll('.horizontal-line, .vertical-line').forEach(line => line.classList.remove('active'));
      scores = [0, 0];
      updateScores();
      currentPlayer = 1;
      board = Array.from({ length: boardSize * 2 - 1 }, () => Array(boardSize * 2 - 1).fill(null));
  }
});

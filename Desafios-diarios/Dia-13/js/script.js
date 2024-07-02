const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'x';
let board = Array(25).fill(null);

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] || checkWinner()) {
        return;
    }

    cell.classList.add(currentPlayer);
    cell.textContent = currentPlayer.toUpperCase();
    board[index] = currentPlayer;

    if (checkWinner()) {
        displayWinner();
    } else {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    }
}

function checkWinner() {
    const winningPatterns = getWinningPatterns();
    return winningPatterns.some(pattern => 
        pattern.every(index => board[index] === currentPlayer)
    );
}

function getWinningPatterns() {
    const patterns = [];

    // Horizontal patterns
    for (let i = 0; i < 25; i += 5) {
        for (let j = 0; j < 2; j++) {  // Ajustado para verificar sequência de 4
            patterns.push([i + j, i + j + 1, i + j + 2, i + j + 3]);
        }
    }

    // Vertical patterns
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {  // Ajustado para verificar sequência de 4
            patterns.push([i + j * 5, i + (j + 1) * 5, i + (j + 2) * 5, i + (j + 3) * 5]);
        }
    }

    // Diagonal patterns (left to right)
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {  // Ajustado para verificar sequência de 4
            patterns.push([i + j * 5, (i + 1) + (j + 1) * 5, (i + 2) + (j + 2) * 5, (i + 3) + (j + 3) * 5]);
        }
    }

    // Diagonal patterns (right to left)
    for (let i = 4; i < 5; i++) {
        for (let j = 0; j < 2; j++) {  // Ajustado para verificar sequência de 4
            patterns.push([i + j * 5, (i - 1) + (j + 1) * 5, (i - 2) + (j + 2) * 5, (i - 3) + (j + 3) * 5]);
        }
    }

    return patterns;
}

function displayWinner() {
    // Remove any existing icon and message
    const iconContainer = document.getElementById('icon');
    const winnerMessage = document.getElementById('winner-message');
    iconContainer.innerHTML = '';
    winnerMessage.textContent = '';

    // Create the LordIcon element
    const lordIcon = document.createElement('lord-icon');
    lordIcon.setAttribute('src', 'https://cdn.lordicon.com/awmkozsb.json');
    lordIcon.setAttribute('trigger', 'hover');
    lordIcon.style.width = '110px';
    lordIcon.style.height = '110px';

    // Append the LordIcon to the icon container
    iconContainer.appendChild(lordIcon);

    // Display the winner message
    winnerMessage.textContent = `${currentPlayer.toUpperCase()}  venceu!`;
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.textContent = '';
    });
    currentPlayer = 'x';
    
    // Remove the winner icon and message
    document.getElementById('icon').innerHTML = '';
    document.getElementById('winner-message').textContent = '';
}

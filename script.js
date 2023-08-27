const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error, please type: rock, paper, or scissors');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'You are in a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  }
};

const playGame = userChoice => {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  document.getElementById('user-choice').textContent = `You threw: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `The computer threw: ${computerChoice}`;
  document.getElementById('game-result').textContent = result;
  
  
};

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

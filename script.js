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
      return 'Sorry,  Im the champion!';
    } else {
      return 'Congratulations, you won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, Im the champion!';
    } else {
      return 'Congratulations, you won!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, Im the champion!';
    } else {
      return 'Congratulations, you won!';
    }
  }
};

const choiceToImageMap = {
  rock: 'rock.png',
  paper: 'paper.png',
  scissors: 'scissors.png'
};

const updateUserChoiceImage = userChoice => {
  const userChoiceImage = choiceToImageMap[userChoice];
  document.getElementById('user-choice-img').src = userChoiceImage;
};

const playGame = userChoice => {
const computerChoice = getComputerChoice();
const result = determineWinner(userChoice, computerChoice);
  
updateUserChoiceImage(userChoice);
const computerChoiceImage = choiceToImageMap[computerChoice];
  document.getElementById('computer-choice-img').src = computerChoiceImage;

  // Update the game result text
  document.getElementById('game-result').textContent = result;
};

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

window.addEventListener('load', () => {
  const imagePaths = Object.values(choiceToImageMap);
  for (const path of imagePaths) {
    const image = new Image();
    image.src = path;
  }
});
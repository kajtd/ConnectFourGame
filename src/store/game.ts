import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
    const NUMBER_OF_COLUMNS = 7
    const NUMBER_OF_ROWS = 6

    const areRulesVisible = ref(false)
    const isGameOn = ref(false)
    const currentColumn = ref(0)

    const firstPlayerTurn = ref(true)

    const playerOneScore = ref(0)
    const playerTwoScore = ref(0)

    const winner = ref<'red' | 'yellow' | ''>('');
    const winnerCords = ref<number[][]>([]);

    
    let timerId: number | null = null;
    const timeLeft = ref(30);

    const board = ref<string[][]>(Array.from({length: NUMBER_OF_COLUMNS}, () => Array(NUMBER_OF_ROWS).fill('')))

    
    const startPlayerVsPlayerMode = () => {
      isGameOn.value = true
      handleRestart()
    }
    
    const checkForWinner = (playerName: string) => {
      const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal right
        [-1, 1] // diagonal left
      ];
          
      for (let row = 0; row < NUMBER_OF_ROWS; row++) {
        for (let col = 0; col < NUMBER_OF_COLUMNS; col++) {
          if (board.value[col][row] !== playerName) continue;
    
          for (const [dx, dy] of directions) {
            let x = row;
            let y = col;
            let count = 0;
            let tempWinnerCords = [];
    
            while (x >= 0 && y >= 0 && x < NUMBER_OF_ROWS && y < NUMBER_OF_COLUMNS && board.value[y][x] === playerName) {
              tempWinnerCords.push([y, x]);
              x += dx;
              y += dy;
              count++;
            }
    
            if (count >= 4) {
              winnerCords.value.push(...tempWinnerCords);
              return true;
            }
          }
        }
      }

      // HANDLE THE FULL BOARD SITUATION
      if (board.value.every(array => array.every(element => element !== ''))) {
        clearTheBoard()
        return false
      }
    
      return false;
    }

    const addNewCounter = () => {
      const playerName = firstPlayerTurn.value ? 'red' : 'yellow';

      const column = board.value[currentColumn.value-1];
      const lastNonEmptyIndex = column.length - column.slice().reverse().findIndex((el: string) => el === '') - 1;
      if (lastNonEmptyIndex < 6) {
        column[lastNonEmptyIndex] = playerName;
        const isWinner = checkForWinner(playerName)
        firstPlayerTurn.value = !firstPlayerTurn.value
        if (isWinner) {
          endGame(playerName)
        }
      }
    }
    
    const clearTheBoard = () => {
      board.value = Array.from({length: NUMBER_OF_COLUMNS}, () => Array(NUMBER_OF_ROWS).fill(''))
    }

    const handleRestart = () => {
      clearTheBoard()
      clearTimeout(timerId!);
      startTimer();
      playerOneScore.value = 0
      playerTwoScore.value = 0
      winner.value = ''
      winnerCords.value = []
      firstPlayerTurn.value = true
    }

    const playAgain = () => {
      clearTheBoard()
      winner.value = ''
      winnerCords.value = []
      startTimer();
    }

    const endGame = (playerName: 'red' | 'yellow') => {
      playerName === 'red' ? playerOneScore.value++ : playerTwoScore.value++
      clearTimeout(timerId!);
      winner.value = playerName
    }

    // Start or reset the timer
    const startTimer = () => {
      if (timerId) {
        clearTimeout(timerId);
      }

      timeLeft.value = 30;
      timerId = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--;
        } else {
          if (winner.value !== '') {
            return
          }
          // Time's up, current player loses
          endGame(firstPlayerTurn.value ? 'yellow' : 'red')
          firstPlayerTurn.value = !firstPlayerTurn.value
          clearTimeout(timerId!);
        }
      }, 1000);
    }
  
    return { 
      areRulesVisible, 
      isGameOn, 
      currentColumn, 
      NUMBER_OF_COLUMNS, 
      NUMBER_OF_ROWS, 
      board, 
      addNewCounter, 
      firstPlayerTurn,
      handleRestart,
      playerOneScore,
      playerTwoScore,
      endGame,
      startTimer,
      timeLeft,
      timerId,
      winner,
      playAgain,
      startPlayerVsPlayerMode,
      winnerCords
    }
  })
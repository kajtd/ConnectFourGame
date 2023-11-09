import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
    const NUMBER_OF_COLUMNS = 7
    const NUMBER_OF_ROWS = 6

    const areRulesVisible = ref(false)
    const isGameOn = ref(false)
    const currentColumn = ref(0)

    const firstPlayerTurn = ref(true)

    const board = ref<string[][]>(Array.from({length: NUMBER_OF_COLUMNS}, () => Array(NUMBER_OF_ROWS).fill('')))

    const addNewMarker = () => {
      const playerName = firstPlayerTurn.value ? 'red' : 'yellow';
      firstPlayerTurn.value = !firstPlayerTurn.value

      const column = board.value[currentColumn.value-1];
      const lastNonEmptyIndex = column.length - column.slice().reverse().findIndex((el: string) => el === '') - 1;

      if (lastNonEmptyIndex !== -1) {
        column[lastNonEmptyIndex] = playerName;
      }
    }
  
    return { 
      areRulesVisible, 
      isGameOn, 
      currentColumn, 
      NUMBER_OF_COLUMNS, 
      NUMBER_OF_ROWS, 
      board, 
      addNewMarker, 
      firstPlayerTurn 
    }
  })
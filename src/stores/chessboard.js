import { ref } from 'vue'
import { defineStore } from 'pinia'

// Chessboard store that manages clicks and highlights on a chessboard
export const useChessboardStore = defineStore('chessboard', () => {
  const clicks = ref([])
  const highlights = ref(new Set())

  // Register a click on the chessboard and toggle its highlight
  function registerClick(coordinate) {
    clicks.value = [...clicks.value, coordinate]

    // Toggle highlight
    if (highlights.value.has(coordinate)) {
      highlights.value.delete(coordinate)
    } else {
      highlights.value.add(coordinate)
    }
  }

  // Reset the state of the store
  function $reset() {
    clicks.value = []
    highlights.value = new Set()
  }

  return { clicks, highlights, registerClick, $reset }
})

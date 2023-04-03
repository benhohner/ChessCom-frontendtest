import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChessboardStore = defineStore('chessboard', () => {
  const clicks = ref([])
  const highlights = ref(new Set([]))

  function registerClick(coordinate) {
    this.clicks = [...this.clicks, coordinate]

    // Toggle highlight
    if (this.highlights.has(coordinate)) {
      this.highlights.delete(coordinate)
    } else {
      this.highlights = this.highlights.add(coordinate)
    }
  }

  function removeClick(coordinate) {
    this.clicks = this.clicks.filter((item) => item !== coordinate)
  }

  return { clicks, highlights, registerClick, removeClick }
})

<script setup>
import { storeToRefs } from 'pinia'
import { useChessboardStore } from '@/stores/chessboard'

const store = useChessboardStore()
const { highlights } = storeToRefs(store)

function handleClick(event) {
  // Get the clicked element's bounding rectangle
  const rect = event.target.getBoundingClientRect()

  // Calculate the relative click position within the element, top left is 0,0
  const relativeX = event.clientX - rect.left
  const relativeY = event.clientY - rect.top

  // Get the width of the element
  const elementWidth = rect.width

  // Calculate the size of a single square
  const squareSize = elementWidth / 8

  // Quantize the click position into 8 squares, inverting the order for ease
  // of rendering
  const squareX = 8 - Math.floor(relativeX / squareSize) - 1
  const rank = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'][squareX]
  const file = 8 - Math.floor(relativeY / squareSize)

  store.registerClick(`${rank}${file}`)
}

function createHighlightPositionStyle(highlight) {
  const [rank, file] = highlight.split('')

  return {
    left: `${'abcdefgh'.indexOf(rank) * 12.5}%`,
    top: `${(8 - parseInt(file)) * 12.5}%`
  }
}
</script>

<template>
  <div class="chess-board-container">
    <div class="chess-board" @mousedown.stop.left="handleClick">
      <div
        class="highlight"
        v-for="highlight in highlights"
        :key="highlight"
        :style="createHighlightPositionStyle(highlight)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.chess-board-container {
  width: auto;
  margin-bottom: var(--globalWindowPadding);
  flex: 0 1 100%;
}

@media (min-width: 960px) {
  .chess-board-container {
    max-height: calc(100dvh - 2 * var(--globalWindowPadding));
    margin-bottom: 0;
    margin-right: var(--globalWindowPadding);
  }
}

.chess-board {
  background-image: url('../assets/green.png');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 3px;
  contain: layout;
  user-select: none;
  aspect-ratio: 1 / 1;
  max-height: 100%;
  position: relative;
}

.highlight {
  position: absolute;
  left: 0;
  top: 0;
  height: 12.5%; /* 100 / 8 */
  width: 12.5%; /* 100 / 8 */
  pointer-events: none;
  background-color: rgba(158, 0, 0, 0.7);
}
</style>

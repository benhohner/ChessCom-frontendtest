<script setup>
import { storeToRefs } from 'pinia'

import { useChessboardStore } from '@/stores/chessboard'

const store = useChessboardStore()
const { clicks, highlights } = storeToRefs(store)
const { registerClick } = store

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

  // Quantize the click position into 8 squares, inverting the order for chess
  // notation
  const squareX = 8 - Math.floor(relativeX / squareSize) - 1
  const rank = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'][squareX]
  const file = 8 - Math.floor(relativeY / squareSize)

  registerClick(`${rank}${file}`)
  console.log(clicks.value)
  console.log(highlights.value)
}
</script>

<template>
  <div class="chess-board_container">
    <div class="chess-board" @click.stop.left="handleClick">
      <div class="highlights" v-for="click in clicks" :key="click">
        <div>{{ click }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chess-board_container {
  width: auto;
  margin-bottom: 1rem;
  flex: 0 1 100%;
}

@media (min-width: 960px) {
  .chess-board_container {
    max-height: calc(100dvh - 2 * 1rem);
    margin-bottom: 0;
    margin-right: 1rem;
  }
}

.chess-board {
  background-color: red;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 3px;
  contain: layout;
  user-select: none;
  background-image: url('../assets/green.png');
  aspect-ratio: 1 / 1;
  max-height: 100%;
}

.highlight {
  height: 12.5%;
  left: 0;
  position: absolute;
  top: 0;
  width: 12.5%;
}
</style>

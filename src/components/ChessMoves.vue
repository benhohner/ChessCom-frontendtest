<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChessboardStore } from '@/stores/chessboard'

const { clicks } = storeToRefs(useChessboardStore())

const squareColorStyles = computed(() =>
  clicks.value.map((click) => {
    const [rank, file] = click.split('')
    const isLight = (parseInt(file) + 'abcdefgh'.indexOf(rank)) % 2 === 0
    return isLight ? 'square-light' : 'square-dark'
  })
)
</script>

<template>
  <div class="chess-moves">
    <div class="chess-move" v-for="(click, index) in clicks" :key="click">
      <span class="square-color-icon" :class="squareColorStyles[index]">{{
        index % 2 == 0 ? index / 2 + 1 : '...'
      }}</span>
      {{ click }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chess-moves {
  padding: 1.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 5.2rem);
  grid-template-rows: repeat(auto-fill, 6rem);
  row-gap: 1.2rem;
  justify-content: space-between;
  overflow-y: scroll;
  flex: 1 0;
}

.chess-move {
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  flex-direction: column;
  font-weight: 600;
  justify-content: center;
  user-select: none;
}

.square-color-icon {
  margin: 0 0 -0.2rem -0.1rem;
  height: 2.4rem;
  width: 2.4rem;
  line-height: 1.1;
  font-size: 2.3rem;
  color: var(--globalColorNeutral300);
}

.square-dark {
  background-color: #7c955d;
}

.square-light {
  background-color: #eeeed5;
}
</style>

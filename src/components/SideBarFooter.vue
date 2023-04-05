<script setup>
import Button from './ButtonComponent.vue'

import { useChessboardStore } from '@/stores/chessboard'

const store = useChessboardStore()
</script>

<template>
  <div class="sidebar-footer">
    <div class="sidebar-footer-contents">
      <p class="sidebar-footer-text">
        This is a test for the senior front end developer position. The test is to implement a chess
        board and a sidebar that displays the moves made.
      </p>
      <Button @click="() => store.$reset()">Reset</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-footer {
  background-color: var(--globalSecondaryBackground);
  color: var(--globalColorThemeMid);
  display: flex;
  flex-direction: row;
  height: 20rem;
  padding: 2.2rem 3rem;
  flex: 0 0;
  border-radius: 0 0 0.5rem 0.5rem;
}
.sidebar-footer-text {
  margin-bottom: 1.2rem;
}
</style>

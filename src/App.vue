<script setup>
import ChessBoard from './components/ChessBoard.vue'
import SideBar from './components/SideBar.vue'
import './assets/global.scss'
</script>

<template>
  <main v-cloak>
    <ChessBoard />
    <SideBar />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
}

@media (min-width: 960px) {
  main {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

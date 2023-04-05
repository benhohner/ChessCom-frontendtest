<script setup>
import SideBarHeader from './SideBarHeader.vue'
import ChessMoves from './ChessMoves.vue'
import SideBarFooter from './SideBarFooter.vue'
</script>

<template>
  <div class="side-bar">
    <div class="side-bar-contents">
      <SideBarHeader />
      <ChessMoves />
      <SideBarFooter />
    </div>
  </div>
</template>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--globalColorThemeFullToMid);
  background-color: var(--globalBackground);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
}

@media (min-width: 960px) {
  .side-bar {
    min-width: 300px;
    max-width: 450px;
    height: calc(100dvh - 2 * var(--globalWindowPadding));
    flex-shrink: 1;
  }
}

.side-bar-contents {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

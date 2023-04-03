<script setup></script>

<template>
  <div class="side-bar">
    <div class="side-bar_contents">Sidebar</div>
  </div>
</template>

<style scoped>
.side-bar {
  width: 100%;
  display: flex;
}

@media (min-width: 960px) {
  .side-bar {
    min-width: 300px;
    max-width: 450px;
    height: calc(100dvh - 2 * 1rem);
    flex-shrink: 1;
  }
}

.side-bar_contents {
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--globalColorThemeFullToMid);
  background-color: var(--globalBackground);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
}
</style>

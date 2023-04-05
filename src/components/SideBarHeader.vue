<script setup></script>

<template>
  <div class="sidebar-header-component">
    <h1 class="sidebar-header-title">Square Tracker</h1>
    <div class="sidebar-header-image"></div>
  </div>
</template>

<style lang="scss">
.sidebar-header-component {
  background-image: radial-gradient(
    102rem 25.5rem at top center,
    rgba(0, 0, 0, 0.14) 39.5%,
    rgba(2, 1, 1, 0) 40%
  );
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1.2rem;
  position: relative;
  text-align: center;
}

.sidebar-header-title {
  font-family: var(--globalSecondaryFont);
  font-size: 3.1rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.8rem;
  margin-top: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  text-shadow: 0 0.05rem 0 rgba(0, 0, 0, 0.4);
  word-break: break-all;
  z-index: 2;
}

.sidebar-header-image {
  height: 8.8rem;
  margin: auto;
  position: relative;
  width: 8.8rem;
  z-index: 1;
  background: url(../assets/vision.5355b9dc.svg) no-repeat 50% / contain;
}
</style>

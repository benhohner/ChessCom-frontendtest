<script setup></script>

<template>
  <button class="button-component">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button-component {
  --borderHeight: 0.1rem;
  --secondaryBorderColor: transparent;
  --fontSize: 1.5rem;
  --iconSize: 2.8rem;
  --iconMargin: 0.5rem;
  --disabledOpacity: 0.9;
  --borderColor: #bdbcb8;
  --basicHoverColor: #504f4f;
  --textShadowColor: rgba(0, 0, 0, 0.1);
  background-color: var(--basicBgColor, #dbd9d7);
  color: var(--basicColor, #666463);
  align-items: center;
  border: 0;
  border-radius: var(--borderRadius, 0.5rem);
  box-shadow: 0 var(--borderHeight) 0 0 var(--borderColor),
    0 0.7rem 0.95rem 0.05rem var(--secondaryBorderColor);
  display: inline-flex;
  font-size: var(--fontSize, 1.5rem);
  font-weight: 600;
  justify-content: center;
  margin-bottom: var(--borderHeight);
  width: 100%;
  height: 5rem;
  max-width: 100%;
  overflow: hidden;
  padding: var(--buttonPaddings, 0.5rem 2rem);
  position: relative;
  text-align: center;
}

.button-component:hover {
  background-color: var(--basicBghover, #e7e6e4);
  color: var(--basicHoverColor);
}
</style>

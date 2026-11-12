<template>
  <p class="eyebrow">
    <slot />
  </p>
</template>

<style scoped>
.eyebrow {
  margin: 0 0 10px;
  color: var(--soft-text);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
}
</style>

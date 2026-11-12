<template>
  <h1 class="page-title">
    <slot />
  </h1>
</template>

<style scoped>
.page-title {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 4rem);
  text-transform: uppercase;
  letter-spacing: -0.05em;
}
</style>

<template>
  <NuxtLink to="/" class="brand">
    <img src="/batmanlogo.jpg" alt="Batman logo" class="brand-logo" />
    <span>Batman</span>
  </NuxtLink>
</template>

<style scoped>
.brand {
  color: var(--nav-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.brand-logo {
  width: 42px;
  height: 42px;
  object-fit: cover;
}
</style>

<script setup>
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

watch(
  () => userStore.theme,
  (value) => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="app-shell">
    <AppNavbar />
    <NuxtPage />
  </div>
</template>

<style>
html[data-theme='dark'] {
  --nav-bg: rgba(0, 0, 0, 0.75);
  --nav-text: #ffffff;
  --page-bg: #090909;
  --card-bg: rgba(255, 255, 255, 0.03);
  --card-border: rgba(255, 255, 255, 0.12);
  --text: #ffffff;
  --soft-text: #d9d9d9;
}

html[data-theme='light'] {
  --nav-bg: rgba(255, 255, 255, 0.9);
  --nav-text: #111111;
  --page-bg: #f3f3f3;
  --card-bg: rgba(0, 0, 0, 0.02);
  --card-border: rgba(0, 0, 0, 0.12);
  --text: #111111;
  --soft-text: #333333;
}

body {
  margin: 0;
  background: var(--page-bg);
  color: var(--text);
  transition: background 0.2s ease, color 0.2s ease;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

.app-shell {
  min-height: 100vh;
}
</style>

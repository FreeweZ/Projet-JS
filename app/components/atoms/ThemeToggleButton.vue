<template>
  <button type="button" class="theme-toggle" @click="$emit('toggle')">
    <slot />
  </button>
</template>

<script setup>
defineEmits(['toggle'])
</script>

<style scoped>
.theme-toggle {
  background: var(--nav-text);
  color: var(--nav-bg);
  border: none;
  padding: 9px 12px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}
</style>

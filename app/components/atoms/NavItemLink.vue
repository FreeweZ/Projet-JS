<template>
  <NuxtLink :to="to" class="nav-item" exact-active-class="active">
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.nav-item {
  color: var(--nav-text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

.nav-item.active {
  text-decoration: underline;
}
</style>

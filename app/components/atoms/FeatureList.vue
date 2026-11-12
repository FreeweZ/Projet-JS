<template>
  <ul class="feature-list">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.feature-list {
  margin: 0;
  padding-left: 18px;
  line-height: 2;
  color: var(--text);
}
</style>

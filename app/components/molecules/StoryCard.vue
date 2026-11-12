<template>
  <article class="story-card">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.story-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 22px 20px;
}

.story-card h2 {
  margin: 0 0 12px;
  font-size: 1.4rem;
  text-transform: uppercase;
}

.story-card p {
  margin: 0;
  color: var(--soft-text);
  line-height: 1.8;
}
</style>

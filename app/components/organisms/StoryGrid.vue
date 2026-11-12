<template>
  <section class="story-grid" data-component="story-grid-organism">
    <StoryCard v-for="block in blocks" :key="block.title" :title="block.title" :text="block.text" />
  </section>
</template>

<script setup>
import StoryCard from '~/components/molecules/StoryCard.vue'

defineProps({
  blocks: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.story-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 760px) {
  .story-grid {
    grid-template-columns: 1fr;
  }
}
</style>

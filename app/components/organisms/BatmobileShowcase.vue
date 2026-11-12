<template>
  <section class="hero-card" data-component="batmobile-organism" data-section="content">
    <div class="text-block">
      <SectionEyebrow>Véhicule</SectionEyebrow>
      <PageTitle>Batmobile</PageTitle>
      <p class="intro">
        Une machine de course, de puissance et de technologie, conçue pour la nuit et pour Gotham.
      </p>
      <FeatureList :items="items" />
    </div>

    <img src="/batmobile.jpg" alt="Batmobile de Batman" class="batmobile-image" />
  </section>
</template>

<script setup>
import SectionEyebrow from '~/components/atoms/SectionEyebrow.vue'
import PageTitle from '~/components/atoms/PageTitle.vue'
import FeatureList from '~/components/atoms/FeatureList.vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.hero-card {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 30px;
  align-items: center;
  padding: 28px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.02);
}

.text-block {
  display: grid;
  gap: 12px;
}

.intro {
  margin: 0;
  color: var(--soft-text);
  line-height: 1.8;
}

.batmobile-image {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border: 1px solid rgba(255,255,255,0.12);
  background: #111;
}

@media (max-width: 760px) {
  .hero-card {
    grid-template-columns: 1fr;
  }
}
</style>

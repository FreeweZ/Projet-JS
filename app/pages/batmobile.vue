<script setup>
import BatmobileShowcase from '~/components/organisms/BatmobileShowcase.vue'


const batmobileSpecs = [
  'Moteur ultra puissant',
  'Blindage renforcé',
  'Technologie de pointe',
  'Design noir emblématique'
]
</script>

<template>
  <div class="page-shell" data-component="batman-batmobile-page">
    <main class="container" data-component="batmobile-main">
      <BatmobileShowcase :items="batmobileSpecs" />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0a, #111111);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 24px;
}
</style>
<template>
  <div class="page-shell" data-component="batman-story-page">
    <main class="container" data-component="story-main">
      <section class="intro" data-component="story-content" data-section="content">
        <SectionEyebrow>Histoire</SectionEyebrow>
        <PageTitle>Le mythe de Batman</PageTitle>
      </section>

      <StoryGrid :blocks="storyBlocks" />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import SectionEyebrow from '~/components/atoms/SectionEyebrow.vue'
import PageTitle from '~/components/atoms/PageTitle.vue'
import StoryGrid from '~/components/organisms/StoryGrid.vue'

const storyBlocks = [
  {
    title: 'Origines',
    text: 'Bruce Wayne voit ses parents se faire tuer devant lui. Cette tragédie le pousse à vouloir combattre le mal.'
  },
  {
    title: 'L’entraînement',
    text: 'À travers le monde, il apprend le courage, la discipline et la technique pour devenir un héros sans égal.'
  },
  {
    title: 'Gotham',
    text: 'De retour dans sa ville, Batman fait face à la corruption, à la peur et aux criminels qui la gouvernent.'
  },
  {
    title: 'Le symbole',
    text: 'L’ombre, le costume et la volonté de protéger les faibles font de lui un héros légendaire.'
  }
]
</script>

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

.intro {
  margin-bottom: 30px;
}
</style>

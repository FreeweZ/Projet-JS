<template>
  <div class="page-shell" data-component="batman-contact-page">
    <main class="container" data-component="contact-main">
      <ContactPanel />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import ContactPanel from '~/components/organisms/ContactPanel.vue'
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
</style>

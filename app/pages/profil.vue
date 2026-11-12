<script setup>
import ProfilePanel from '~/components/organisms/ProfilePanel.vue'
</script>

<template>
  <div class="page-shell">
    <main class="container">
      <ProfilePanel />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0a, #111111);
  color: #fff;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 24px;
}
</style>

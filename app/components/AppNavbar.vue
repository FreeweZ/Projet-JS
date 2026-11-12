<script setup>
import { useUserStore } from '~/stores/user'
import BrandLogo from '~/components/atoms/BrandLogo.vue'
import NavMenu from '~/components/molecules/NavMenu.vue'

const userStore = useUserStore()

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Histoire', to: '/histoire' },
  { label: 'Missions', to: '/missions' },
  { label: 'Batmobile', to: '/batmobile' },
  { label: 'Contact', to: '/contact' }
]

function toggleTheme() {
  userStore.toggleTheme()
}
</script>

<template>
  <header class="topbar" data-component="global-navbar" data-section="navbar">
    <BrandLogo />
    <NavMenu
      :links="navLinks"
      :profile-label="userStore.connectUser ? userStore.fullName : 'Connexion'"
      :is-dark-mode="userStore.isDarkMode"
      @toggle-theme="toggleTheme()"
    />
  </header>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 30px;
  background: var(--nav-bg);
  color: var(--nav-text);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
}

@media (max-width: 760px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 20px;
  }
}
</style>

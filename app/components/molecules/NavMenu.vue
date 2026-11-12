<script setup>
import ThemeToggleButton from '~/components/atoms/ThemeToggleButton.vue'
import NavItemLink from '~/components/atoms/NavItemLink.vue'

const props = defineProps({
  links: {
    type: Array,
    default: () => []
  },
  profileLabel: {
    type: String,
    default: 'Connexion'
  },
  isDarkMode: {
    type: Boolean,
    default: false
  },
  showProfileLink: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['toggle-theme'])
</script>

<template>
  <nav class="nav" aria-label="Navigation principale">
    <NavItemLink v-for="link in links" :key="link.to" :to="link.to">
      {{ link.label }}
    </NavItemLink>

    <NuxtLink v-if="showProfileLink" to="/profil" class="profile-link">
      {{ profileLabel }}
    </NuxtLink>

    <ThemeToggleButton @toggle="emit('toggle-theme')">
      {{ isDarkMode ? 'Light' : 'Dark' }}
    </ThemeToggleButton>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.profile-link {
  color: rgb(8, 4, 4);
  text-decoration: none;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  background: rgb(255, 255, 5);
  padding: 8px 12px;
}
</style>

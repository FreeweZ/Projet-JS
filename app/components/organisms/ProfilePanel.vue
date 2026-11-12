<template>
  <section class="card" data-component="profile-panel-organism">
    <template v-if="userStore.connectUser">
      <div class="profile-header">
        <img
          class="avatar"
          :src="userStore.connectUser.avatar || '/batmanlogo.jpg'"
          :alt="`Photo de profil de ${userStore.fullName}`"
        />
        <div class="profile-heading">
          <p class="eyebrow">Espace personnel</p>
          <h1>{{ userStore.fullName }}</h1>
          <p class="email">{{ userStore.connectUser.email }}</p>
        </div>
      </div>

      <div class="tabs" role="tablist" aria-label="Paramètres du compte">
        <button
          id="profile-tab"
          class="tab"
          :class="{ active: activeTab === 'profile' }"
          type="button"
          role="tab"
          aria-controls="profile-panel"
          :aria-selected="activeTab === 'profile'"
          @click="activeTab = 'profile'"
        >
          Mon profil
        </button>
        <button
          id="contact-tab"
          class="tab"
          :class="{ active: activeTab === 'contact' }"
          type="button"
          role="tab"
          aria-controls="contact-panel"
          :aria-selected="activeTab === 'contact'"
          @click="activeTab = 'contact'"
        >
          Coordonnées
        </button>
      </div>

      <ProfileDetailsTab
        v-if="activeTab === 'profile'"
        id="profile-panel"
        aria-labelledby="profile-tab"
      />
      <ProfileContactTab
        v-else
        id="contact-panel"
        aria-labelledby="contact-tab"
      />

      <button class="action secondary logout" type="button" @click="userStore.logout()">
        Se déconnecter
      </button>
    </template>

    <template v-else>
      <h1>Connexion</h1>
      <form class="form" @submit.prevent="login">
        <label for="name">Prénom</label>
        <input
          id="name"
          v-model.trim="name"
          type="text"
          placeholder="Votre prénom"
          autocomplete="given-name"
          required
        />

        <label for="login-email">E-mail</label>
        <input
          id="login-email"
          v-model.trim="email"
          type="email"
          placeholder="vous@exemple.com"
          autocomplete="email"
          required
        />

        <button class="action" type="submit">Se connecter</button>
      </form>
    </template>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '~/stores/user'
import ProfileDetailsTab from '~/components/organisms/ProfileDetailsTab.vue'
import ProfileContactTab from '~/components/organisms/ProfileContactTab.vue'

const userStore = useUserStore()
const name = ref('')
const email = ref('')
const activeTab = ref('profile')

function login() {
  const user = {
    name: name.value,
    email: email.value,
    bio: '',
    avatar: '/batmanlogo.jpg'
  }
  console.log('Connexion :', user)
  userStore.loginUser(user)
}
</script>

<style scoped>
.card {
  display: grid;
  gap: 24px;
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(24px, 5vw, 48px);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  color: #f8f8f8;
  text-align: left;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  width: 88px;
  height: 88px;
  flex: 0 0 auto;
  border: 1px solid rgba(211, 180, 91, 0.75);
  border-radius: 50%;
  object-fit: cover;
  background: #222;
}

.profile-heading {
  display: grid;
  gap: 8px;
}

.eyebrow {
  margin: 0;
  color: #d3b45b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  overflow-wrap: anywhere;
}

.email {
  margin: 0;
  color: #d9d9d9;
}

.form {
  display: grid;
  gap: 12px;
}

label {
  color: #f4f4f4;
  font-weight: 700;
}

input {
  width: 100%;
  padding: 12px 14px;
  background: #111;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  font: inherit;
}

.tabs {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.action {
  width: fit-content;
  padding: 12px 18px;
  background: #ffff10;
  color: #111;
  border: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
}

.tab {
  padding: 12px 16px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #ccc;
  font: inherit;
  cursor: pointer;
}

.tab.active {
  border-bottom-color: #d3b45b;
  color: #fff;
}

.secondary {
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  color: #fff;
}

.logout {
  justify-self: start;
}

.action:focus-visible,
.tab:focus-visible,
input:focus-visible {
  outline: 2px solid #d3b45b;
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .profile-header {
    align-items: flex-start;
  }

  .avatar {
    width: 64px;
    height: 64px;
  }

  .tab {
    flex: 1;
    padding-inline: 8px;
  }
}
</style>

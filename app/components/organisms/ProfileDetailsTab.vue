<template>
  <section :id="id" class="tab-panel" role="tabpanel" :aria-labelledby="labelledBy">
    <form class="form" @submit.prevent="save">
      <h2>Mon profil</h2>

      <label for="profile-name">Nom</label>
      <input id="profile-name" v-model.trim="name" type="text" autocomplete="name" required />

      <label for="profile-avatar">Photo de profil (URL)</label>
      <input
        id="profile-avatar"
        v-model.trim="avatar"
        type="url"
        placeholder="https://..."
      />

      <label for="profile-bio">À propos de moi</label>
      <textarea id="profile-bio" v-model.trim="bio" rows="4" placeholder="Quelques mots sur vous..." />

      <p v-if="saved" class="success" role="status">Profil enregistré.</p>
      <button class="action" type="submit">Enregistrer le profil</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '~/stores/user'

defineProps({
  id: {
    type: String,
    default: undefined
  },
  labelledBy: {
    type: String,
    required: true
  }
})

const userStore = useUserStore()
const name = ref(userStore.connectUser?.name ?? '')
const avatar = ref(userStore.connectUser?.avatar ?? '')
const bio = ref(userStore.connectUser?.bio ?? '')
const saved = ref(false)

function save() {
  userStore.updateUserProfile({
    name: name.value,
    avatar: avatar.value || '/batmanlogo.jpg',
    bio: bio.value
  })
  saved.value = true
}
</script>

<style scoped>
.tab-panel {
  min-width: 0;
}

.form {
  display: grid;
  gap: 12px;
}

h2 {
  margin: 0 0 4px;
  font-size: 1.25rem;
}

label {
  color: #f4f4f4;
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #111;
  color: #fff;
  font: inherit;
}

textarea {
  resize: vertical;
}

.success {
  margin: 0;
  color: #b6e3bd;
}

.action {
  justify-self: start;
  padding: 12px 18px;
  border: 0;
  background: #d3b45b;
  color: #111;
  font-weight: 700;
  cursor: pointer;
}

.action:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #d3b45b;
  outline-offset: 3px;
}
</style>

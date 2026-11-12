<template>
  <section :id="id" class="tab-panel" role="tabpanel" :aria-labelledby="labelledBy">
    <form class="form" @submit.prevent="save">
      <h2>Coordonnées</h2>

      <label for="profile-email">Adresse e-mail</label>
      <input
        id="profile-email"
        v-model.trim="email"
        type="email"
        autocomplete="email"
        required
      />

      <p v-if="saved" class="success" role="status">Adresse e-mail enregistrée.</p>
      <button class="action" type="submit">Enregistrer les coordonnées</button>
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
const email = ref(userStore.connectUser?.email ?? '')
const saved = ref(false)

function save() {
  userStore.updateUserProfile({ email: email.value })
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

input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #111;
  color: #fff;
  font: inherit;
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
input:focus-visible {
  outline: 2px solid #d3b45b;
  outline-offset: 3px;
}
</style>

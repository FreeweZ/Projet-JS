<template>
  <div class="page-shell">
    <main class="missions-page">
      <section class="intro">
        <SectionEyebrow>Gotham City</SectionEyebrow>
        <PageTitle>Missions de Batman</PageTitle>
        <p class="description">
          Consultez les missions et ajoutez un nouvel objectif au tableau du Chevalier Noir.
        </p>
      </section>

      <form class="mission-form" @submit.prevent="createMission">
        <label for="mission-title">Nouvelle mission</label>
        <div class="form-controls">
          <input
            id="mission-title"
            v-model="newMission"
            type="text"
            maxlength="120"
            placeholder="Ex. Protéger les rues de Gotham"
            :disabled="isCreating"
            required
          />
          <button type="submit" :disabled="isCreating || !newMission.trim()">
            {{ isCreating ? 'Envoi…' : 'Ajouter la mission' }}
          </button>
        </div>
      </form>

      <p v-if="errorMessage" class="feedback error" role="alert">{{ errorMessage }}</p>
      <p v-if="successMessage" class="feedback success" role="status">{{ successMessage }}</p>
      <p v-if="isLoading" class="feedback" role="status">Chargement des missions…</p>

      <ul v-else-if="missions.length" class="mission-list">
        <li v-for="mission in missions" :key="mission.id" class="mission-card">
          <span class="mission-status" :class="{ completed: mission.completed }">
            {{ mission.completed ? 'Terminée' : 'À accomplir' }}
          </span>
          <h2>{{ mission.title }}</h2>
        </li>
      </ul>

      <p v-else-if="!errorMessage" class="feedback">Aucune mission à afficher.</p>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageTitle from '~/components/atoms/PageTitle.vue'
import SectionEyebrow from '~/components/atoms/SectionEyebrow.vue'

const { $missionApi } = useNuxtApp()
const missions = ref([])
const newMission = ref('')
const isLoading = ref(true)
const isCreating = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

async function loadMissions() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    missions.value = await $missionApi.getMissions()
  } catch {
    errorMessage.value = 'Les missions ne sont pas disponibles pour le moment.'
  } finally {
    isLoading.value = false
  }
}

async function createMission() {
  const title = newMission.value.trim()
  if (!title || isCreating.value) return

  isCreating.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const mission = await $missionApi.createMission(title)
    missions.value = [mission, ...missions.value]
    newMission.value = ''
    successMessage.value = 'Mission ajoutée au tableau.'
  } catch {
    errorMessage.value = 'La mission n’a pas pu être ajoutée. Réessayez.'
  } finally {
    isCreating.value = false
  }
}

await loadMissions()
</script>

<style scoped>
.page-shell {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0a, #111111);
}

.missions-page {
  width: min(100% - 48px, 1000px);
  min-height: calc(100vh - 150px);
  margin: 0 auto;
  padding: 60px 0;
}

.intro {
  margin-bottom: 32px;
}

.description,
.feedback {
  color: #bdbdbd;
  line-height: 1.6;
}

.mission-form {
  display: grid;
  gap: 10px;
  margin: 36px 0 24px;
}

.mission-form label {
  font-weight: 700;
}

.form-controls {
  display: flex;
  gap: 12px;
}

.form-controls input {
  min-width: 0;
  flex: 1;
  padding: 12px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #171717;
  color: #fff;
  font: inherit;
}

.form-controls button {
  padding: 12px 16px;
  border: 0;
  background: #d3b45b;
  color: #111;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.form-controls button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.feedback.error {
  color: #ff9696;
}

.feedback.success {
  color: #a9e3ad;
}

.mission-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.mission-card {
  min-height: 140px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
}

.mission-card h2 {
  margin: 16px 0 0;
  font-size: 1.1rem;
}

.mission-status {
  color: #d3b45b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mission-status.completed {
  color: #a9e3ad;
}

@media (max-width: 600px) {
  .missions-page {
    width: min(100% - 36px, 560px);
    padding: 40px 0;
  }

  .form-controls {
    flex-direction: column;
  }
}
</style>

<template>
  <section class="content" data-component="contact-panel-organism" data-section="content">
    <SectionEyebrow>Contact</SectionEyebrow>
    <PageTitle>Écrire à Gotham</PageTitle>

    <form @submit.prevent="submitForm" class="form">
      <label>
        Nom
        <input v-model="form.name" type="text" placeholder="Votre nom" />
      </label>

      <label>
        E-mail
        <input v-model="form.email" type="email" placeholder="votre@email.com" />
      </label>

      <label>
        Message
        <textarea v-model="form.message" rows="4" placeholder="Votre message..."></textarea>
      </label>

      <button type="submit">Envoyer</button>
      <p v-if="status" class="status">{{ status }}</p>
    </form>
  </section>
</template>

<script setup>
import SectionEyebrow from '~/components/atoms/SectionEyebrow.vue'
import PageTitle from '~/components/atoms/PageTitle.vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const status = ref('')

function submitForm() {
  const message = { ...form }
  console.log('Soumission du formulaire de contact :', message)

  if (!form.name || !form.email || !form.message) {
    status.value = 'Merci de remplir tous les champs.'
    return
  }

  status.value = `Merci ${form.name}, votre message a bien été envoyé.`
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.content {
  max-width: 700px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.02);
  padding: 28px 22px;
}

.form {
  display: grid;
  gap: 18px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--text);
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  background: #111;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.12);
  padding: 12px 14px;
  font: inherit;
}

button {
  width: fit-content;
  padding: 12px 18px;
  background: #fff;
  color: #101010;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.status {
  margin: 0;
  color: var(--soft-text);
}
</style>

<template>
  <div class="welcome-box">
    <p class="eyebrow">
      {{ userName ? `Bienvenue, ${userName}` : 'Bienvenue à Gotham' }}
    </p>
    <h1 id="home-title">La nuit n’est jamais sans espoir.</h1>
    <p class="description">
      Entrez dans l’univers du Chevalier Noir et découvrez la ville qu’il protège,
      ses origines et ses légendes.
    </p>
  </div>
</template>

<script setup>
defineProps({
  userName: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.welcome-box {
  color: #fff;
}

.eyebrow {
  margin: 0 0 20px;
  color: #d3b45b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

h1 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.8rem);
  font-weight: 800;
  letter-spacing: -0.065em;
  line-height: 0.98;
  text-wrap: balance;
}

.description {
  max-width: 520px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.8;
}

@media (max-width: 600px) {
  .eyebrow {
    font-size: 0.68rem;
  }
}
</style>

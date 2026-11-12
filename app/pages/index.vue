<template>
  <div class="page-shell">
    <HomeHero :user-name="userStore.connectUser ? userStore.fullName : ''" />

    <main>
      <section class="explore" aria-labelledby="explore-title">
        <div class="section-heading">
          <p class="eyebrow">Explorez l’univers</p>
          <h2 id="explore-title">Gotham vous attend</h2>
          <p class="section-description">
            Découvrez le héros, la ville et la machine qui veillent sur Gotham.
          </p>
        </div>

        <div class="cards">
          <NuxtLink
            v-for="card in exploreCards"
            :key="card.to"
            :to="card.to"
            class="explore-card"
          >
            <span class="card-number">{{ card.number }}</span>
            <span class="card-content">
              <span class="card-title">{{ card.title }}</span>
              <span class="card-description">{{ card.description }}</span>
            </span>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </NuxtLink>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
import HomeHero from '~/components/organisms/HomeHero.vue'

const userStore = useUserStore()

const exploreCards = [
  {
    number: '01',
    title: 'Son histoire',
    description: 'Découvrez les origines du Chevalier Noir.',
    to: '/histoire'
  },
  {
    number: '02',
    title: 'La Batmobile',
    description: 'Approchez le véhicule emblématique de Gotham.',
    to: '/batmobile'
  },
  {
    number: '03',
    title: 'Nous contacter',
    description: 'Une question ? Écrivez-nous.',
    to: '/contact'
  }
]
</script>

<style scoped>
.page-shell {
  min-height: 100vh;
  overflow: hidden;
  background-color: #090909;
  background-image:
    linear-gradient(rgba(7, 7, 7, 0.68), rgba(7, 7, 7, 0.88)),
    url('/Oui.jpg');
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
}

.explore {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: clamp(64px, 8vw, 96px) 0;
}

.section-heading {
  max-width: 680px;
  margin-bottom: 32px;
  text-align: left;
}

.eyebrow {
  margin: 0 0 14px;
  color: #d3b45b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

h2 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: -0.045em;
  line-height: 1.08;
}

.section-description {
  margin: 14px 0 0;
  color: #aaa;
  line-height: 1.7;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 18px;
}

.explore-card {
  position: relative;
  display: flex;
  min-height: 200px;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 15, 15, 0.78);
  backdrop-filter: blur(8px);
  color: inherit;
  text-decoration: none;
  transition: border-color 180ms ease, transform 180ms ease, background 180ms ease;
}

.explore-card:hover,
.explore-card:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(211, 180, 91, 0.75);
  background: linear-gradient(145deg, rgba(211, 180, 91, 0.1), rgba(255, 255, 255, 0.02));
}

.explore-card:focus-visible {
  outline: 2px solid #d3b45b;
  outline-offset: 4px;
}

.card-number {
  color: #d3b45b;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
}

.card-content {
  display: grid;
  align-content: start;
  gap: 8px;
  padding-right: 24px;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-description {
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.6;
}

.card-arrow {
  position: absolute;
  right: 24px;
  bottom: 24px;
  color: #d3b45b;
  font-size: 1.2rem;
}

@media (max-width: 760px) {
  .explore {
    width: min(100% - 36px, 560px);
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .explore-card {
    min-height: 160px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .explore-card {
    transition: none;
  }

  .explore-card:hover,
  .explore-card:focus-visible {
    transform: none;
  }
}
</style>

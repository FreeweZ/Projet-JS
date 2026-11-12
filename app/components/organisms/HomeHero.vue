<template>
  <section class="hero" aria-labelledby="home-title">
    <div class="hero-content">
      <WelcomeBanner :user-name="userName" />
      <NuxtLink class="hero-link" to="/histoire">
        Découvrir son histoire
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
    <p class="hero-caption" aria-hidden="true">La nuit protège ceux qui espèrent</p>
  </section>
</template>

<script setup>
import WelcomeBanner from '~/components/molecules/WelcomeBanner.vue'

defineProps({
  userName: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  min-height: min(720px, calc(100svh - 76px));
  align-items: center;
  overflow: hidden;
  padding: clamp(36px, 8vw, 112px) max(24px, calc((100vw - 1120px) / 2));
  isolation: isolate;
  background: linear-gradient(
    90deg,
    rgba(5, 5, 5, 0.82) 0%,
    rgba(5, 5, 5, 0.62) 48%,
    rgba(5, 5, 5, 0.2) 100%
  );
}

.hero-content {
  width: min(100%, 680px);
}

.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin-top: 32px;
  padding: 14px 18px;
  border: 1px solid #d3b45b;
  color: #f3e5b4;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 180ms ease, color 180ms ease;
}

.hero-link:hover,
.hero-link:focus-visible {
  background: #d3b45b;
  color: #111;
}

.hero-link:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

.hero-link span {
  font-size: 1.1rem;
}

.hero-caption {
  position: absolute;
  right: max(24px, calc((100vw - 1120px) / 2));
  bottom: 24px;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .hero {
    min-height: 560px;
    padding-inline: 24px;
  }

  .hero-caption {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-link {
    transition: none;
  }
}
</style>

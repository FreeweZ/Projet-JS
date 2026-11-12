<template>
  <footer class="site-footer" data-component="global-footer" data-section="footer">
    <p>Batman © 2026</p>
    <nav class="footer-nav">
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/histoire">Histoire</NuxtLink>
      <NuxtLink to="/batmobile">Batmobile</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: var(--soft-text);
  max-width: 1100px;
  margin: 0 auto;
}

.footer-nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-nav a {
  color: var(--soft-text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

@media (max-width: 760px) {
  .site-footer {
    display: block;
    text-align: center;
  }

  .footer-nav {
    justify-content: center;
    margin-top: 14px;
  }
}
</style>

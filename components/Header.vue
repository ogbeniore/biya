<template>
  <nav class="nav">
    <nuxt-link to="/">
      <img src="@/assets/logo.png" alt="Biya - Easy payments via chat" class="nav__image">
    </nuxt-link>
    <nuxt-link to="/faq" class="nav__link">
      FAQs
    </nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  max-width: 130rem;
  margin: 0 auto;
  padding: 6rem 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__image {
    height: 4rem;
    width: auto;
  }
  &__link {
    font-size: 1.6rem;
    line-height: 1.5;
    color: #5A6972;
    text-decoration: none;
    &:hover {
      color: var(--pink);
    }
  }
}
</style>

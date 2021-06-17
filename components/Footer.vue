<template>
  <div class="section__grey">
    <footer class="footer">
      <nav class="footer-nav">
        <nuxt-link to="/privacy" class="footer-nav__link">
          Privacy
        </nuxt-link>
        <nuxt-link to="/terms" class="footer-nav__link">
          Terms
        </nuxt-link>
      </nav>
      <p class="footer-copyright">
        © 2021, Biya. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.section__grey {
  background: #F5F5F5;
}
.footer {
  max-width: 130rem;
  margin: 0 auto;
  padding: 3.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.6rem;
  &-nav {
    &__link {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: var(--pink);
        &::after {
          color:  var(--primary-color);
        }
      }
      &:first-of-type {
        &::after {
          content: '|'
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    text-align: center;
    flex-direction: column;
    &-nav {
      margin-bottom: 1rem;
    }
  }
}
</style>

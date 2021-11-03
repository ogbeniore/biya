<template>
  <section class="bills">
    <div class="bills__media">
      <img src="@/assets/bills.png" alt="Pay bills screenshot">
    </div>
    <article class="bills__text">
      <h3>Pay bills without stress</h3>
      <p>No need to go to a physical office or join a long queue before paying your bills are paid. Join the community of Biya users who pay their bills easily and stress free simply by chatting.</p>
      <button class="btn" @click="scrollToStart()">
        Get Started
      </button>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToStart () {
      document.getElementById('start').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    }
  }
}
</script>

<style lang="scss" scoped>
.bills {
  background: #FFF8FA;
  max-width: 130rem;
  padding: 10rem 7.2rem 0 7.2rem;
  margin: 10rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6rem;
  align-items: center;
  &__media {
    align-self: end;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__text {
    h3 {
      color: var(--primary-color);
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    p {
      color: var(--secondary-color);
      font-size: 1.6rem;
      letter-spacing: 0.005em;
      margin-bottom: 4rem;
      line-height: 170%;
    }
  }
  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    padding: 4.8rem 3.2rem 0 3.2rem;
    margin: 0 auto;
    &__media {
      grid-row: 2/3;
      max-height: 400px;
      margin: 0 auto;
    }
    &__text {
      text-align: center;
      h3 {
        font-size: 2.8rem;
      }
    }
  }
}
</style>

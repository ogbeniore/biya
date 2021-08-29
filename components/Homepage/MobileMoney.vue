<template>
  <section class="mobile-money">
    <div class="mobile-money__media">
      <img src="@/assets/mobile-money.png" alt="Woman holding phone">
    </div>
    <article class="mobile-money__text">
      <h3>You mobile recharge and bills are just one message away.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget, donec ut accumsan nibh turpis massa facilisis pellentesque amet.
        <br>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget, donec ut accumsan nibh turpis massa facilisis pellentesque amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget, donec ut accumsan nibh turpis massa facilisis pellentesque amet.
      </p>
      <!-- <button class="btn btn__outline">
        Get Started
      </button> -->
    </article>
  </section>
</template>

<style lang="scss" scoped>
.mobile-money {
  max-width: 110rem;
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
    margin: 0 auto;
    margin-bottom: 10rem;
    padding: 0 3.2rem;
    &__media {
      display: none;
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

<template>
  <section class="questions">
    <div class="questions-text">
      <h3>Have questions ?</h3>
      <p>
        Let’s hear what you have to or any question in your mind,
        you can send us a mail or Get in touch with us on
        <a href="mailto:hello@biya.com.ng">hello@biya.com.ng</a>
      </p>
    </div>
    <div />
  </section>
</template>

<style lang="scss" scoped>
.questions {
  background: var(--pink);
  color: #ffffff;
  max-width: 101rem;
  padding: 6.4rem;
  margin: 10rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &-text {
    border-right: 2px solid rgba(255, 255, 255, 0.8);
    h3 {
      font-size: 4rem;
      line-height: 6.2rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      a {
        color: inherit;
        text-decoration: none;
        font-weight: 600;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    padding: 3.2rem;
    margin: 0 auto;
    &-text {
      border: none;
      text-align: center;
      h3 {
        font-size: 2.8rem;
      }
    }
  }
}
</style>

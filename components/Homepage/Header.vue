<template>
  <header class="header">
    <div class="header-content">
      <h1>
        Easy payments via chat.
      </h1>
      <p>
        Biya lets you do airtime top-up, pay bills &  <br> transfer funds easily via
        <span class="platforms">
          <span v-show="platform === 1" class="platforms-1">Browser.</span>
          <span v-show="platform === 2" class="platforms-2">Skype.</span>
          <span v-show="platform === 3" class="platforms-3">Slack.</span>
          <span v-show="platform === 4" class="platforms-4">Messenger.</span>
        </span>
      </p>
      <!-- <button class="btn">
        Get Started
      </button> -->
    </div>
    <div class="header-image">
      <img src="@/assets/hero-image.png" alt="Biya User">
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    platform: 1
  }),
  mounted () {
    setTimeout(() => {
      setInterval(() => {
        const { platform } = this
        platform < 4 ? this.platform += platform : this.platform = 1
      }, 2000)
    }, 800)
  }
}
</script>

<style lang="scss" scoped>
.header {
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 2rem 6rem 2rem;
  min-height: 70rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &-content {
    max-width: 57rem;
    h1 {
      font-weight: 700;
      font-size: 6.4rem;
      line-height: 140%;
      color: #052D46;
    }
    p {
      font-size: 2.1rem;
      color: #626E75;
      line-height: 155%;
      font-weight: 400;
      margin-top: 2rem;
      margin-bottom: 3.2rem;
      .platforms {
        display: inline-grid;
        color: var(--pink);
        grid-template-columns: 1fr;
        overflow: hidden;
        max-height: 3.4rem;
        &-1, &-2, &-3, &-4 {
          grid-row: 1/2;
          grid-column: 1/2;
          transform: translateY(100%);
          opacity: 0.2;
          animation: sliiiider ease-in-out 2s infinite alternate-reverse;
        }
      }
    }
  }
  &-image {
    width: 50rem;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    img {
      margin: auto;
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 769px) {
    min-height: 60rem;
    &-image {
      display: none;
    }
    &-content {
      br {
        display: none;
      }
    }
  }
}
@keyframes sliiiider {
  0% {
    transform: translateY(100%);
  }
  40% {
    transform: translateY(0);
    opacity: 1;
  }
  70% {
    transform: translateY(0);
    opacity: 1;
  }
  95% {
    opacity: 0;
    transform: translateY(100%);
  }

}
</style>

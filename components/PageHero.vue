<template>
  <header class="header">
    <div class="header-content">
      <h1>
        {{ name }}
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  margin: 6rem 0;
}
.header {
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 2rem 6rem 2rem;
  min-height: 30rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &-content {
    h1 {
      font-weight: 700;
      font-size: 6.4rem;
      line-height: 140%;
      color: #052D46;
    }
  }
}
</style>

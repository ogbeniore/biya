<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
:root {
  --primary-color: #052D46;
  --secondary-color: #626E75;
  --pink: #DD137B;
}
html {
  font-family:
    'Montserrat',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 10px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.btn {
  background: var(--pink);
  color: #ffffff;
  padding: 1.5rem 3.6rem;
  border: 1px solid var(--pink);
  cursor: pointer;
  &:not(:disabled):hover {
    color: var(--pink);
    background-color: #ffffff;
  }
}
</style>

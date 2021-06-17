<template>
  <main>
    <Bills />
    <Questions />
  </main>
</template>

<script>
import Questions from '@/components/Homepage/Questions.vue'
import Bills from '@/components/Homepage/Bills.vue'
export default {
  name: 'Homepage',
  components: {
    Questions,
    Bills
  }
}
</script>

<style lang="scss">

</style>

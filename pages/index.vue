<template>
  <main>
    <Features />
    <MobileMoney />
    <Bills />
    <Questions />
  </main>
</template>

<script>
import Questions from '@/components/Homepage/Questions.vue'
import Bills from '@/components/Homepage/Bills.vue'
import MobileMoney from '@/components/Homepage/MobileMoney.vue'
import Features from '@/components/Homepage/Features.vue'
export default {
  name: 'Homepage',
  components: {
    Questions,
    Bills,
    MobileMoney,
    Features
  }
}
</script>

<style lang="scss">

</style>

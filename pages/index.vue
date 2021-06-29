<template>
  <main>
    <Header />
    <GetStarted />
    <WhatWeDo />
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
import WhatWeDo from '@/components/Homepage/WhatWeDo.vue'
import GetStarted from '@/components/Homepage/GetStarted.vue'
import Header from '@/components/Homepage/Header.vue'
export default {
  name: 'Homepage',
  components: {
    Questions,
    Bills,
    MobileMoney,
    Features,
    WhatWeDo,
    GetStarted,
    Header
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div class="accordion">
    <div
      v-for="({question, answer, bills}, index) in items"
      :key="index"
      class="accordion__item"
      :class="{'active': open === index}"
      @click="openItem(index)"
    >
      <div class="accordion__item__header">
        <p>
          {{ question }}
        </p>
        <span class="icon" />
      </div>
      <div class="accordion__item__body">
        <p>
          {{ answer }}
        </p>
        <ul v-if="bills">
          <li>Recharge my line</li>
          <li>Recharge my line with 500</li>
          <li>load 100 airtime on 09058508857</li>
          <li>Pay my DSTV bill</li>
          <li>Pay my SMILE bill</li>
          <li>Pay my IKEDC bill</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./Accordion.js"></script>

<style lang="scss" scoped src="./Accordion.scss"></style>

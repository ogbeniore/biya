export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    open: null
  }),
  methods: {
    openItem (index) {
      this.open = this.open === index ? null : index
    }
  }
}

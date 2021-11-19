<template>
  <div :class="cssClass">
    <span class="material-icons my-auto pr-4">info</span>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    type: {
      type: String,
      default: 'informative',
      validator: (value) => ['informative', 'success', 'alert'].indexOf(value) !== -1
    },
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      colors: {
        informative: { background:'blue-20', color: 'blue-60' },
        success: { background:'green-10', color: 'green-70' },
        alert: { background:'yellow-10', color: 'yellow-70' }
      }
    }
  },
  computed: {
    cssClass() {
      return `font-small rounded-md py-2 px-4 align-middle flex bg-${this.colors[this.type].background} text-${this.colors[this.type].color}`
    }
  }
}
</script>

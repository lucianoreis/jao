<template>
  <div :class="cssClass">
    <span class="material-icons mr-4">{{ icon }}</span>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    color: {
      type: String,
      default: 'blue-60'
    },
    type: {
      type: String,
      default: 'intense',
      validator: (value) => ['soft', 'intense'].indexOf(value) !== -1
    },
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      if (this.color === 'blue-60') return 'info'
      if (this.color === 'green-20') return 'check_circle'
      return 'warning'
    },
    cssClass() {
      const textColor = this.type === 'intense' ? 'white': this.color
      const background = this.type === 'soft'? `${this.color.split('-', 1)}-10` : this.color
      return `font-bold shadow-md rounded-md p-3 h-12 flex bg-${background} text-${textColor}`
    }
  }
}
</script>

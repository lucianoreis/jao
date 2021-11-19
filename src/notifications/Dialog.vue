<template>
  <div class="bg-blue text-white h-48">{{ text }}</div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    text: {
      type: String,
      required: true
    }
  }  
}
</script>

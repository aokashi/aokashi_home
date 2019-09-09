<template>
  <div :class="className">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: String,
    borderColor: String,
    textColor: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    className: function() {
      return `bg-${this.backgroundColor} border-2 border-${this.borderColor} text-${this.textColor} rounded m-3 p-2`;
    }
  }
}
</script>

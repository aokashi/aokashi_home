<template>
  <div :class="elementClass">
    <g-link :to="to" :title="title ? title : name">{{name}}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    elementClass() {
      let elementClass = 'menu__item';
      if (this.isActive) {
        elementClass += ' menu__item--active';
      }
      return 'menu__item';
    }
  }
}
</script>

<style>

</style>

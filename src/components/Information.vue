<template>
  <div class="information">
    <div class="information__title">{{title}}</div>
    <div class="information__content"><slot/></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="sass">
  .information
    @apply flex border-t-4 border-navy

    .information__title
      @apply flex-initial bg-gray-700 text-white p-3 font-bold

    .information__content
      @apply flex-auto bg-white p-3
  
</style>

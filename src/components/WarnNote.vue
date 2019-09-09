<template>
  <div>
    <Note background-color="red-100" border-color="red-500" text-color="red-800">
      <div class="flex">
        <div class="icon--warn"></div>
        <div class="p-2"><slot/></div>
      </div>
    </Note>
  </div>
</template>

<script>
import Note from '~/components/Note.vue';

export default {
  components: {
    Note
  }
}
</script>

<style lang="sass" scoped>
  .icon--warn
    background: transparent url('~@/assets/images/icon-warn.png') no-repeat left center;
    min-width: 48px;
    min-height: 48px;
</style>

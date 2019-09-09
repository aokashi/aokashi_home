<template>
  <div>
    <Note background-color="blue-100" border-color="blue-500" text-color="blue-800">
      <div class="flex">
        <div class="icon--info"></div>
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
  .icon--info
    background: transparent url('~@/assets/images/icon-info.png') no-repeat left center;
    min-width: 48px;
    min-height: 48px;
</style>

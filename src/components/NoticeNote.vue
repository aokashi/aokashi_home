<template>
  <div>
    <Note background-color="orange-100" border-color="orange-500" text-color="orange-800">
      <div class="flex">
        <div class="icon--notice"></div>
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
  .icon--notice
    background: transparent url('~@/assets/images/icon-notice.png') no-repeat left center;
    min-width: 48px;
    min-height: 48px;
</style>

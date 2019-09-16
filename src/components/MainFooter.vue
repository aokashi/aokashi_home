<template>
  <footer class="footer">
    <div class="container mx-auto">
      <Menu class="footer__menu" :data="MenuData" />
      <div class="footer__copyright">
        <p>Copyright © 2010-{{currentYear}} Aokashi.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from '../components/Menu.vue';
import MenuData from '~/data/menu/footer-menu.json';

export default {
  components: {
    Menu
  },
  data() {
    return {
      MenuData
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass">
.footer
  @apply bg-darkgray text-white border-t-2 border-navy py-4 text-center

  &__menu,
  &__copyright
    @apply my-4

  .menu__item
    @apply inline-block mx-4
    &:hover
      @apply underline
</style>

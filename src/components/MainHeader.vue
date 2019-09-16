<template>
  <header class="main-header header">
    <div class="container">
      <div class="header__title">
        <g-link to="/" title="Aokashi Home">
          <g-image src="~/assets/images/logo-mini.png" class="logo mx-auto" alt="Aokashi Home" />
        </g-link>
      </div>
      <div class="block lg:hidden">
        <button class="header__menu-button" @click="toggleMenuButton">
          Menu
        </button>
      </div>
      <Menu
        class="header__menu"
        :class="menuClasses"
        :data="MenuData"
      />
    </div>
  </header>
</template>

<script>
import Menu from '../components/Menu.vue';
import MenuData from '~/data/menu/header-menu.json';

export default {
  components: {
    Menu
  },
  data() {
    return {
      isOpened: false,
      MenuData
    }
  },
  methods: {
    toggleMenuButton() {
      this.isOpened = !this.isOpened;
    }
  },
  computed: {
    menuClasses() {
      return this.isOpened ? 'block' : 'hidden';
    }
  }
}
</script>

<style lang="sass">
.main-header
  @apply bg-silver border-b-2 border-navy

  .container
    @apply mx-auto flex items-center justify-between flex-wrap px-2 py-4
  
  .header__title
    @screen lg
      @apply mr-6

  .header__menu-button
    @apply items-center px-3 py-2 border border-navy rounded

  .header__menu
    @apply w-full flex-grow mt-4
    @screen lg
      @apply flex w-auto ml-auto

    .menu__item
      @apply block border-l-2 border-gray-500 p-2
      &--active
        @apply border-navy
      @screen lg
        @apply inline-block border-l-0 border-t-2

    .menu__item:hover
      @apply bg-gray-500
  
</style>

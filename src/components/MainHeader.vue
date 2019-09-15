<template>
  <header class="main-header header">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <div class="header__title flex items-center flex-shrink-0">
        <g-link to="/" title="Aokashi Home">
          <g-image src="~/assets/images/logo-mini.png" class="logo mx-auto" alt="Aokashi Home" />
        </g-link>
      </div>
      <div class="block lg:hidden">
        <button class="header__menu-button" @click="toggleMenuButton">
          Menu
        </button>
      </div>
      <div class="header__menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:ml-auto" :class="menuClasses">
        <g-link to="/wwa" class="menu__item lg:menu__item--lg block lg:inline-block">WWA</g-link>
        <g-link to="/software" class="menu__item block lg:inline-block">Software</g-link>
        <g-link to="/material" class="menu__item block lg:inline-block">Material</g-link>
        <g-link to="/portfolio" class="menu__item block lg:inline-block">Portfolio</g-link>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';

export default {
  components: {
    Menu,
    MenuItem
  },
  data() {
    return {
      isOpened: false
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
    @apply px-2 py-4
  
  .header__title
    @screen lg
      @apply mr-6

  .header__menu-button
    @apply items-center px-3 py-2 border border-navy rounded

  .header__menu
    @apply mt-4

    .menu__item
      @apply p-2 border-l-2 border-gray-500
      @screen lg
        @apply border-l-0 border-t-2
    
    .menu__item--active
      @apply border-navy

    .menu__item:hover
      @apply bg-gray-500
  
</style>

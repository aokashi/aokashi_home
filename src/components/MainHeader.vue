<template>
  <header class="header">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <div class="title flex items-center flex-shrink-0 mr-6">
        <g-link to="/" title="Aokashi Home">
          <g-image src="~/assets/images/logo-mini.png" class="logo mx-auto" alt="Aokashi Home" />
        </g-link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-navy border-navy" @click="toggleMenuButton">
          Menu
        </button>
      </div>
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto" :class="menuClasses">
        <div class="text-sm lg:flex-grow">
          <g-link to="/wwa" class="block mt-4 lg:inline-block lg:mt-0 mr-4">WWA</g-link>
          <g-link to="/software" class="block mt-4 lg:inline-block lg:mt-0 mr-4">Software</g-link>
          <g-link to="/material" class="block mt-4 lg:inline-block lg:mt-0 mr-4">Material</g-link>
          <g-link to="/portfolio" class="block mt-4 lg:inline-block lg:mt-0 mr-4">Portfolio</g-link>
        </div>
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

<style lang="sass" scoped>
.header
  background-color: #c0c0c0
  border-bottom: 2px solid #000080

.menu__item
  flex: 0 0 6rem
  text-align: center
</style>

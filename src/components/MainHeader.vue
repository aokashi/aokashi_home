<template>
  <header class="header">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <div class="title flex items-center flex-shrink-9 mr-6">
        <g-link to="/" title="Aokashi Home">
          <g-image src="~/assets/images/logo-mini.png" class="logo mx-auto" alt="Aokashi Home" />
        </g-link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-navy border-navy">
          Menu
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Menu>
            <MenuItem to="/wwa/" name="WWA" />
            <MenuItem to="/software/" name="Software" />
            <MenuItem to="/material" name="Material" />
            <MenuItem to="/portfolio/" name="Portfolio" />
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
.header
  background-color: #c0c0c0
  border-bottom: 2px solid #000080

.menu__item
  flex: 0 0 6rem
  text-align: center
</style>

<script>
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';

export default {
  components: {
    Menu,
    MenuItem
  }
}
</script>


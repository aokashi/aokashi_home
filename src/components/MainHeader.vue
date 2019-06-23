<template>
  <header class="header">
    <div class="containe mx-auto lg:flex">
      <div class="title">
        <g-link to="/" title="Aokashi Home">
          <g-image src="~/assets/images/logo-mini.png" class="logo mx-auto" alt="Aokashi Home" />
        </g-link>
      </div>
      <Menu>
        <MenuItem to="/wwa/" name="WWA" />
        <MenuItem to="/software/" name="Software" />
        <MenuItem to="/material" name="Material" />
        <MenuItem to="/portfolio/" name="Portfolio" />
      </Menu>
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


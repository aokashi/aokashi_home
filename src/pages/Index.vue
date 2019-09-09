<template>
  <div>
    <header>
      <h1>
        <g-image alt="Aokashi Home" src="~/assets/images/logo.png" />
      </h1>
    </header>
    <Menu>
      <MenuItem to="/wwa" name="WWA" />
      <MenuItem to="/software" name="Software" />
      <MenuItem to="/material" name="Material" />
      <MenuItem to="/portfolio" name="Portfolio" />
    </Menu>
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from '../components/MainFooter.vue';
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';

export default {
  metaInfo: {
    title: 'Aokashi Home'
  },
  components: {
    MainFooter,
    Menu,
    MenuItem
  }
}
</script>

<style>
body {
  background: #808080 url('~@/assets/images/background-home.png');
}

.home-links a {
  margin-right: 1rem;
}
</style>

<template>
  <div>
    <header>
      <h1>
        <g-image alt="Aokashi Home" src="~/assets/images/logo.png" />
      </h1>
    </header>
    <Menu>
      <MenuItem to="/" name="WWA" />
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
.home-links a {
  margin-right: 1rem;
}
</style>

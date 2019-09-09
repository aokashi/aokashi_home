<template>
  <Layout>
    <div class="container mx-auto">
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
    </div>
    <MainFooter />
  </Layout>
</template>

<script>
import Layout from '~/layouts/Index.vue';
import MainFooter from '../components/MainFooter.vue';
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';

export default {
  metaInfo: {
    title: 'Aokashi Home'
  },
  components: {
    Layout,
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

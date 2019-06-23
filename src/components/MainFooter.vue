<template>
  <footer class="footer">
    <div class="container mx-auto">
      <Menu>
        <MenuItem to="/" name="Home" />
        <MenuItem to="/about" name="当サイトについて" />
      </Menu>
      <div class="copyright">
        <p>Copyright © 2010-{{currentYear}} Aokashi.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';

export default {
  components: {
    Menu,
    MenuItem
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped>
.footer
  background-color: #404040
  color: #fff
  border-top: 2px solid #000080

a:link,
a:visited
  color: #fff

.copyright
  text-align: center
</style>

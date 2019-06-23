<template>
  <div class="footer">
    <div class="menu">
      <div class="menu__item">
        <g-link to="/" title="Home">Home</g-link>
      </div>
      <div class="menu__item">
        <g-link to="/about" title="当サイトについて">当サイトについて</g-link>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2010-{{currentYear}} Aokashi.</p>
    </div>
  </div>
</template>

<script>
export default {
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
  +content-width()

a:link,
a:visited
  color: #fff

.copyright
  text-align: center
</style>

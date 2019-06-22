<template>
  <div class="footer">
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

<style scoped>
.footer {
  background-color: #c0c0c0;
  border-top: 2px solid #000080;
}

.copyright {
  text-align: center;
}
</style>

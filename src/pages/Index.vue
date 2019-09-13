<template>
  <Layout>
    <Information title="お知らせ">
      <p>Aokashi Homeがリニューアル！より探しやすくなりました！</p>
    </Information>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Index.vue';
import Information from '~/components/Information.vue'

export default {
  components: {
    Layout,
    Information
  }
}
</script>

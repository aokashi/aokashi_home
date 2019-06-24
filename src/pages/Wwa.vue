<template>
  <Layout>
    <header class="header">
      <h1>WWA</h1>
    </header>
    <p>WWA作品を扱っています。</p>
    <div v-for="(wwa, wwaNumber) in WWAData" :key="wwaNumber">
      <WWAItem :number="wwaNumber" :data="wwa" />
    </div>
  </Layout>
</template>

<script>
import WWAItem from '~/components/WWAItem.vue';
import WWAData from '~/data/wwa.json';

export default {
  data() {
    return {
      WWAData
    }
  },
  components: {
    WWAItem
  }
}
</script>

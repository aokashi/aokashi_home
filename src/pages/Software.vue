<template>
  <Layout>
    <header class="header">
      <h1>ソフトウェア</h1>
    </header>
    <p>制作したソフトウェアを公開しちえます。公開しているプログラムはすべて GitHub にリポジトリを残しています。以下のリンクから GitHub へアクセスできます。</p>
    <a class="button" href="https://github.com/aokashi/">GitHub へアクセス</a>
    <div v-for="(software, softwareKey) in SoftwareData" :key="softwareKey">
      <SoftwareItem :data=software />
    </div>
  </Layout>
</template>

<script>
import SoftwareData from '~/data/software.json';
import SoftwareItem from '~/components/SoftwareItem.vue';

export default {
  data() {
    return {
      SoftwareData
    }
  },
  components: {
    SoftwareItem
  }
}
</script>

<style>
.button {
  @apply bg-blue-500 text-white m-1 p-1;
}
</style>

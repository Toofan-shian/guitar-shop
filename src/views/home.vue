<template>
  <div>
    <Header/>
    <popularProducts/>
  </div>
</template>

<script>
import Header from '@/components/home/header.vue';
import popularProducts from '@/components/home/popularProducts.vue';

export default {
  components: {
    Header,
    popularProducts,
  }  
}
</script>
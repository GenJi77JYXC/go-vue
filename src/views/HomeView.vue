<template lang="">
 <div class="grid">
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">logo</div>
    </div>
    <div class="col">
        <div></div>
    </div>
    <div class="col">
        <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="value1" placeholder="Search" />
        </span>
    </div>
</div>
  <Carousel />
  <DataView />
</template>
<script>
import Carousel from '@/components/carousel.vue';
import DataView from '@/components/datalist.vue';

export default {
  components: {
    Carousel, DataView
  }
}
</script>
<style lang="">
  
</style>

<template lang="">
    <div class="grid">
        <div class="col-fixed">
            <Menu />
        </div>
        <div class="col">
            <RouterView />
        </div>
    </div>
</template>
<script>
import { RouterView } from 'vue-router'
import Menu from '@/components/menu.vue'
export default {
    components: { RouterView, Menu }
}
</script>
<style lang="">
    
</style>
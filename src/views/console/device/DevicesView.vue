<template>
  <DataTable :value="devices" v-model:selection="selectedProducts" tableStyle="min-width: 50rem">
            <Column selectionMode="single" style="width:3rem" :exportable="false"></Column>
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
    </DataTable>
</template>

<script>
import useDeviceStore from "@/stores/device";
export default {
    data(){
        return {
            devices: [],
            selectedProducts: [],
            columns: [
                {field:'ID', header:'设备ID'},
                {field:'Mac', header:'Mac地址'},
            ],
        }
    },
    methods: {
        getData() {
            const deviceStore = useDeviceStore()
            deviceStore.list().then((res)=>{
                this.devices = res.data.data
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style>

</style>
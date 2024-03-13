

<template>
    <div class="card">
        <Toolbar class="mb-4">
                <template #start>
                    <Button label="新建" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
                    <Button label="删除" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts" />
                </template>
                <template #center>
                    {{ selectedProducts }}
                </template>
                <template #end>
                    <Button label="修改简介" icon="pi pi-file-edit" @click="refresh" class="mr-2" />
                    <Button v-if="selectedProducts && selectedProducts.ArticleID == 0" label="上传文档" icon="pi pi-upload" @click="refresh" class="mr-2" />
                    <Button v-if="selectedProducts && !selectedProducts.ArticleID == 0" label="编辑文档" icon="pi pi-file-edit" @click="refresh" class="mr-2" />
                    <FileUpload mode="basic" v-if="selectedProducts && selectedProducts.FileID == 0"  chooseLabel="上传文件"  class="mr-2" customUpload @uploader="fileAdd" />
                    <FileUpload mode="basic" v-if="selectedProducts && !selectedProducts.FileID == 0" chooseLabel="编辑文件"  class="mr-2" customUpload @uploader="fileUpdate" />
                    <FileUpload mode="basic" v-if="selectedProducts && selectedProducts.ImageID == 0" chooseLabel="上传封面"  class="mr-2" customUpload @uploader="imageAdd" />
                    <FileUpload mode="basic" v-if="selectedProducts && !selectedProducts.ImageID == 0" chooseLabel="编辑封面"  class="mr-2" customUpload @uploader="imageUpdate" />
                </template>
        </Toolbar>

        <DataTable :value="products" v-model:selection="selectedProducts" tableStyle="min-width: 50rem">
            <Column selectionMode="single" style="width:3rem" :exportable="false"></Column>
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script>
// import { ProductService } from '@/service/ProductService';
import  useSoftwareStore  from '@/stores/software'
// import { software } from '@/service/software'
export default {
    data() {
        return {
            products: null,
            columns: null,
            selectedProducts: null,
        };
    },
    created() {
        this.columns = [
            { field: 'name', header: '软件名称' },
            { field: 'category', header: '院系' },
            { field: 'tag', header: '标签' },
            { field: 'description', header: '简介' }

        ];
    },
    mounted() {
        const softwareStore = useSoftwareStore()
        softwareStore.list().then((res)=>{
            this.products = res.data.data
        }).catch((err)=>{
            console.log(err)
        })
//         this.products = [
//     {
//         "ID": 2,
//         "CreatedAt": "2024-01-26T16:56:59.626+08:00",
//         "UpdatedAt": "2024-01-26T16:56:59.626+08:00",
//         "DeletedAt": null,
//         "name": "typora",
//         "description": "软件描述",
//         "category": "软件分类",
//         "tag": "标签",
//         "ImageID": 2,
//         "FileID": 0,
//         "ArticleID": 1
//     }
// ]
    },
     methods: {
        async fileAdd(event){
            const id = this.selectedProducts.ID
            const name = this.selectedProducts.name
            const file = event.files[0]
            console.log(event)
            const softwareStore = useSoftwareStore()
            softwareStore.fileAdd({ id, name, file }).then((res) => {
                console.log(res.data)
                // 执行刷新页面 因为products被更改了
                softwareStore.list().then((res) => {
                this.products = res.data.data
                }).catch((err) => {
                console.log(err)
                })
                // 
            }).catch((err) => {
                console.log(err)
            })
        },
        async fileUpdate(event) {
      const id = this.selectedProducts.ID
      const name = this.selectedProducts.name
      const file = event.files[0]
      console.log(event)
      const softwareStore = useSoftwareStore()
      softwareStore.fileUpdate({ id, name, file }).then((res) => {
        console.log(res.data)
        // 执行刷新页面 因为products被更改了
        softwareStore.list().then((res) => {
          this.products = res.data.data
        }).catch((err) => {
          console.log(err)
        })
        // 
      }).catch((err) => {
        console.log(err)
      })
    },
    async iamgeAdd(event) {
      const id = this.selectedProducts.ID
      const name = this.selectedProducts.name
      const file = event.files[0]
      console.log(event)
      const softwareStore = useSoftwareStore()
      softwareStore.imageAdd({ id, name, file }).then((res) => {
        console.log(res.data)
        // 执行刷新页面 因为products被更改了
        softwareStore.list().then((res) => {
          this.products = res.data.data
        }).catch((err) => {
          console.log(err)
        })
        // 
      }).catch((err) => {
        console.log(err)
      })
    },
    async imageUpdate(event) {
      const id = this.selectedProducts.ID
      const name = this.selectedProducts.name
      const file = event.files[0]
      console.log(event)
      const softwareStore = useSoftwareStore()
      softwareStore.imageUpdate({ id, name, file }).then((res) => {
        console.log(res.data)
        // 执行刷新页面 因为products被更改了
        softwareStore.list().then((res) => {
          this.products = res.data.data
        }).catch((err) => {
          console.log(err)
        })
        // 
      }).catch((err) => {
        console.log(err)
      })
    }
     }

};
</script>
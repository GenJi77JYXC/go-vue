
<template>
    <div class="card">
        <DataView :value="products">
            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <div class="text-2xl font-bold text-900">{{ item.name }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.description }}</span>
                                        </span>
                                        <Tag :value="item.category" severity="info"></Tag>
                                        <span class="text-2xl font-semibold">{{ item.tag }}</span>
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    
                                    <Button icon="pi pi-download" rounded></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>

export default {
    data() {
        return {
            products: [
                {
                    id: '1000',
                    name: '软件名称',
                    description: '软件描述',
                    image: 'bamboo-watch.jpg',
                    category: '大一',
                    tag: '某专业',

                },
                {
                    id: '1001',
                    name: '软件名称',
                    description: '软件描述',
                    image: 'bamboo-watch.jpg',
                    category: '大一',
                    tag: '某专业',

                },{
                    id: '1002',
                    name: '软件名称',
                    description: '软件描述',
                    image: 'bamboo-watch.jpg',
                    category: '大一',
                    tag: '某专业',

                },{
                    id: '1003',
                    name: '软件名称',
                    description: '软件描述',
                    image: 'bamboo-watch.jpg',
                    category: '大一',
                    tag: '某专业',

                },{
                    id: '1004',
                    name: '软件名称',
                    description: '软件描述',
                    image: 'bamboo-watch.jpg',
                    category: '大一',
                    tag: '某专业',

                },
            ],
            responsiveOptions: [
                {
                    breakpoint: '1400px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 1
                },
                {
                    breakpoint: '767px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '575px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    methods: {

    }
};
</script>

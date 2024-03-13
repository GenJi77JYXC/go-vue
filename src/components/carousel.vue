
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">{{ slotProps.data.description }}</h6>
                        <Tag :value="slotProps.data.tag" severity="info" />
                        
                        <Tag :value="slotProps.data.category" severity="info" />
                        <div class="mt-5 flex align-items-center justify-content-center gap-2">
                            <Button icon="pi pi-download" rounded />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
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

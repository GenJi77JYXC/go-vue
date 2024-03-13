<template>
    <dv-full-screen-container style="background-color: rgb(31, 31, 98);">
        <div class="w-full flex justify-content-center" style="color:aqua;">METC</div>
        <dv-button class="w-8rem right-0 " @click="$router.push({ name: 'console' })">控制台</dv-button>
        <div class="w-full">
            <dv-decoration-10 style="width:90%;height:5px;" />
        </div>
        <dv-border-box13 style="width: 30rem;height: 30rem;">
            <div style="margin-left: 1rem;margin-top: 1rem;">
                <dv-capsule-chart :config="config" style="width:28rem;height:28rem;margin-left: 1rem;padding-top: 2rem;" />
            </div>
        </dv-border-box13>
    </dv-full-screen-container>
</template>

<script>
export default {
    
    data() {
        return {
            config: {
                data: [
                    {
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 123
                    },
                    {
                        name: '漯河',
                        value: 98
                    },
                    {
                        name: '郑州',
                        value: 75
                    },
                    {
                        name: '西峡',
                        value: 66
                    },
                    {
                        name: '周口',
                        value: 123
                    },
                    {
                        name: '漯河',
                        value: 98
                    },
                    {
                        name: '郑州',
                        value: 75
                    },
                    {
                        name: '西峡',
                        value: 66
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '万元',
                labelNum: 8,
            }
        }
    }
}
</script>

<style></style>
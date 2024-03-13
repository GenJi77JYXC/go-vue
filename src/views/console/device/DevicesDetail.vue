
<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script>
import useDeviceStore from '@/stores/device';
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            this.chartOptions = this.setChartOptions();
            const deviceStore = useDeviceStore();
            const documentStyle = getComputedStyle(document.documentElement);
            deviceStore.listData({"id":"4"}).then((res)=>{
                let data = res.data.data
                let labels = []
                let humi = []
                let temp = []
                data.forEach(element => {
                    if (element.Sorts == "humi"){
                        humi.push(element.Data)
                        labels.push(element.CreatedAt)
                    }
                    if (element.Sorts == "temp"){
                        temp.push(element.Data)
                    }
                });
                this.chartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'humi',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--cyan-500'),
                        yAxisID: 'y',
                        tension: 0.4,
                        data: humi
                    },
                    {
                        label: 'temp',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--gray-500'),
                        yAxisID: 'y1',
                        tension: 0.4,
                        data: temp
                    }
                ]
            };
                
            }).catch((err)=>{
                console.log(err)
            })
          
        },
       
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                stacked: false,
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
</script>

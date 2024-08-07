<!--
 * @Author: lkw199711 lkw199711@163.com
 * @Date: 2023-10-27 11:08:16
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-08-07 11:08:37
 * @FilePath: /smanga/src/views/index/index.vue
-->
<template>
    <v-chart ref="chart" class="chart" :option="option" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, DatasetComponent } from "echarts/components";
import { BarChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, onMounted } from 'vue';
import chartsApi from '@/api/charts';

use([
    CanvasRenderer,
    BarChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    GridComponent,
]);

provide(THEME_KEY, 'default');
const chart = ref();
let dataArr = ref<any>([]);
const option = ref({
    title: {
        text: '漫画类型分布',
        left: 'center',
    },
    xAxis: {
        type: 'category',
        data: ['条漫', '单页', '双页', '裁切']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: dataArr,
            type: 'bar'
        }
    ]
});

function random() {
    return Math.round(300 + Math.random() * 700) / 10;
}

function resize() {
    chart.value.resize();
}

defineExpose({ resize });

onMounted(async () => {
    const typeObj = await chartsApi.browse();
    Object.values(typeObj).forEach((item: any) => {
        dataArr.value.push(item)
    })
})
</script>

<style scoped></style>
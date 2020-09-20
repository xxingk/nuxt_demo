<template>
  <div class="container">
    <div class="chart-demo" id="chart_demo"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'mycharts',
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('chart_demo'), 'dark')
      myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            itemStyle: {
            },
            xAxis: 
              {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              },
            yAxis: {},
            series: [
              {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              },
              {
                name: '销量1',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
              },
            ]
        });
    }
    
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.chart-demo {
  width: 600px;
  height: 400px;
}
</style>

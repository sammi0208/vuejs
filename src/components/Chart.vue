<template>
    <div class="chart">
        <div :id="id" :option="option"></div>
    </div>
</template>

<script>
import HighCharts from 'highcharts'
export default {
  // 驗證類型
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  mounted () {
    HighCharts.chart(this.id, this.option)
  }
}
</script>
<style scoped>
</style>

<template>
    <Chart :id="id" :option="option"></Chart>
</template>
<script>
/* eslint-disable */
import Chart from "../../components/Chart";
import options from '../../components/charts/dashboardchart'
export default {
    name: "week_chart",
    components: {
        Chart
  },
  data() {
    let option = options.bar2
    return {
        id: "dashboardchart",
        option: option
    }
  }
}
</script>
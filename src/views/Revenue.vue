<template>
    <main role="main" class="col-md-12 ml-sm-auto col-sm-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h1">Revenue</h1>
        </div>
        <div class="cards row">
          <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
            <stats-card class="card mb-4 shadow-sm">
              <div slot="content">
                <p class="card-title">{{stats.title}}</p>
                <p class="card-text">{{stats.value}}</p>
              </div>
            </stats-card>
          </div>
        </div>
        <div class="chart">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link to="/day_chart" class="dropdown-item">Day</router-link>
              <router-link to="/week_chart" class="dropdown-item">Week</router-link>
            </div>
          </div>
          <div>
            <router-view></router-view>
          </div>
        </div>
    </main>
</template>
<script>
/* eslint-disable */
import StatsCard from "../components/cards/StatsCard";
import Chart from "../components/Chart";
import options from '../components/charts/dashboardchart'
export default {
  name: "dashboard",
  components: {
    Chart,
    StatsCard
  },
  data() {
    let option = options.bar
    return {
      id: "dashboardchart",
      option: option,
      statsCards: [
        {
          type: "warning",
          icon: "ti-server",
          title: "日營業額",
          value: "$1000",
          footerText: "日營業額",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "週營業額",
          value: "$1,345",
          footerText: "週營業額",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          icon: "ti-pulse",
          title: "月營業額",
          value: "$2000",
          footerText: "月營業額",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          icon: "ti-twitter-alt",
          title: "年營業額",
          value: "$50000",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ]
      }
      }
}
</script>
<style>
.card-title {
  font-size: x-small;
  font-family: "Microsoft YaHei";
}
.card-text {
  padding-left: 100px;
  font-size: x-large;
}

[role="main"] {
    padding-top: 100px; /* Space for fixed navbar */
}
@media (min-width: 768px) {
    [role="main"] {
        padding-top: 1px; /* Space for fixed navbar */
        }
}
</style>

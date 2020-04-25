<template>
    <div class="dashboardlayout">
    <nav class="navbar navbar-expand navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/day_chart" class="navbar-brand col-sm-3 col-md-2 mr-0">Test Dashboard</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto px3">
          <li class="nav-item">
            <router-link to="/day_chart" class="nav-link">Revenue</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ranking" class="nav-link">Ranking</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">Test</router-link>
          </li>
        </ul>
      </div>
    </nav>
        <div class="main-content">
            <fade-transition :duration="200" origin="center top" mode="out-in">
            <!-- your content here -->
            <router-view></router-view>
            </fade-transition>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import { FadeTransition } from 'vue2-transitions'
export default {
  components: {
      FadeTransition,
    },
  name: 'dashboardlayout',
}
</script>
<style scoped>
.dashboardlayout {
    font-size: .900rem;
  }
  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }
  /*
   * Navbar
   */
  .nav-item {
      font-size: 20px;
      margin: 9px;
  }
  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 23px;
    padding-left: 19px;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }
  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }
  .form-control-dark {
    color: #fff;
    background-color: rgba(175, 19, 19, 0.1);
    border-color: rgba(255, 255, 255, .1);
  }
  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }
</style>

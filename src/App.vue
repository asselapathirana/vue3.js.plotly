<script setup >
import PlotlyBarEx from './components/PlotlyBarEx.vue'
import PlotlyEx from './components/PlotlyEx.vue'
import PlotlyScatEx from './components/PlotlyScatEx.vue'
import DataChanger from './components/DataChanger.vue'
</script>

<template>
  <header>
    <div class="buttons">
     <DataChanger />
    </div>
    <div class="wrapper">
      <PlotlyEx type="bar" />
    </div>
    <div class="wrapper">
      <PlotlyEx type="scatter" fill="tozeroy" />
    </div>
    <div class="wrapper">
      <PlotlyEx type="scatter" />
    </div>


  </header>
</template>


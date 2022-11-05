<template>
  <div><h1> Hello </h1>
  <div style="width:500px;height:400px;" id="plot1"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import  Plotly  from 'plotly.js-dist/plotly'
import { useDataStore } from '../stores/data'

const storeData = useDataStore()
onMounted(() => {
  const d=storeData.chartData
  Plotly.newPlot('plot1', d.data, d.layout, d.attrb)
})
storeData.$subscribe((mutation, state) => {
  const d=storeData.chartData
  Plotly.react('plot1', d.data, d.layout, d.attrb)
})

</script>
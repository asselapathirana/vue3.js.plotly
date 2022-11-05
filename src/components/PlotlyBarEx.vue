<template>
  <div><h1> Hello </h1>
  <div style="width:500px;height:400px;" id="plot1"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import  Plotly  from 'plotly.js-dist/plotly'
const data=[{ x: [1,2,3,4], y: [10,15,13,17], type:"scatter" }]
const attr= { displayModeBar: true}
const layout= { title: "My graph :)", margin: {l:20, r:20, t:30, b:20} }
onMounted(() => {
  Plotly.newPlot('plot1', data, layout)
})

</script>
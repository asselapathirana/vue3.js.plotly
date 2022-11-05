<template>
  <div><h1> Hello </h1>
  <div style="width:500px;height:400px;" :id="id"></div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import  Plotly  from 'plotly.js-dist/plotly'
import { useDataStore } from '../stores/data'
import uuid4 from "uuid4";

const props = defineProps(['type', 'fill'])

const id = uuid4()
const storeData = useDataStore()
onMounted(() => {
  //id = uuid4()
  const d=storeData.chartData
  d.data[0].type=props.type
  d.data[0].fill=props.fill
  console.log("type", props.type)
  Plotly.newPlot(id, d.data, d.layout, d.attrb)
})
storeData.$subscribe((mutation, state) => {
  const d=storeData.chartData
  d.data[0].type=props.type
  d.data[0].fill=props.fill
  Plotly.react(id, d.data, d.layout, d.attrb)
})

</script>
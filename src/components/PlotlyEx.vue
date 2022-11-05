<template>
  <div><h1> Hello </h1>
  <!-- Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive. v-bind:id= shortcut :id= -->
  <div style="width:500px;height:400px;" :id="id"></div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import  Plotly  from 'plotly.js-dist/plotly'
import uuid4 from "uuid4";
// import pinia store and instantiate
import { useDataStore } from '../stores/data'
const storeData = useDataStore()

// template props are defined. Then they can be accessed as props.type etc.
const props = defineProps(['type', 'fill'])

// generate id as unique
const id = uuid4()


onMounted(() => {
  // get the current data
  const d=get_data()
  // create new plot
  Plotly.newPlot(id, d.data, d.layout, d.attrb)
})
storeData.$subscribe((mutation, state) => {
  const d=get_data()
  // update plot (react - same signature as newPlot)
  Plotly.react(id, d.data, d.layout, d.attrb)
})

function get_data() {
  // get chart data from pina store and customize
  const d=storeData.chartData;
  d.data[0].type=props.type;
  d.data[0].fill=props.fill;
  return d;
}
</script>
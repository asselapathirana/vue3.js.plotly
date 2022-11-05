import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('counter', () => {
  //ref()s become state properties
  //computed()s become getters
  //function()s become actions
  // see https://pinia.vuejs.org/core-concepts/#setup-stores
  //following are state properties:
  const data = ref([])
  const attr = ref({})
  const layout = ref({})
  // set their initial values
  data.value=setData()
  attr.value= { displayModeBar: true}
  layout.value= { title: "My graph :)", margin: {l:20, r:20, t:30, b:20} }

  //action to change data
  function changeData(){
    data.value=setData()
  }
  // getter for chartData
  const chartData = computed(() => 
  //Plotly seem to mutate these values. So, to ensure it does not happen, we deepcopy things. 
            ({data: JSON.parse(JSON.stringify(data.value)), 
              attr: JSON.parse(JSON.stringify(attr.value)), 
              layout: JSON.parse(JSON.stringify(layout.value)) }))
  // pinia requires to return the data
  return { data, attr, layout , changeData, chartData}

})

function setData() {
  return [{
    x: [1, 2, 3, 4],
    y: [10 + Math.random(), 15 + Math.random(), 13 + Math.random(), 27 * Math.random()],
    type: "scatter"
  }]
}


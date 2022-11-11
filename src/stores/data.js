import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('counter', () => {
  //ref()s become state properties
  //computed()s become getters
  //function()s become actions
  // see https://pinia.vuejs.org/core-concepts/#setup-stores
  //following are state properties:
  const data = ref([])
  const config = ref({})
  const layout = ref({})
  // set their initial values
  data.value=setData()
  config.value= { displayModeBar: true }
  layout.value= { margin: {l:20, r:20, t:30, b:20} }

  //action to change data
  function changeData(){
    data.value=setData()
  }
  // getter for chartData
  // const chartData = computed(() => 
  // //Plotly seem to mutate these values. So, to ensure it does not happen, we deepcopy things. 
  //           ({data: JSON.parse(JSON.stringify(data.value)), 
  //             config: JSON.parse(JSON.stringify(config.value)), 
  //             layout: JSON.parse(JSON.stringify(layout.value)) }))


function getData(type){
  var d = data.value

  if (type=="pie"){
    d=[{values: data.value[0].y,
      labels: data.value[0].x,
      type:type, 
      sort:false}]
  }

  const c=config.value
  const l=layout.value

  //Plotly seem to mutate these values. So, to ensure it does not happen, we deepcopy things. 
  return  {data: JSON.parse(JSON.stringify(d)), 
    config: JSON.parse(JSON.stringify(c)), 
    layout: JSON.parse(JSON.stringify(l)) }
}

  // pinia requires to return the data
  return { data, config, layout , changeData,  getData}

})



function setData() {
  return [{
    x: [1, 2, 3, 4],
    y: [10 + Math.random(), 15 + Math.random(), 13 + Math.random(), 27 * Math.random()],
    type: "scatter"
  }]
}


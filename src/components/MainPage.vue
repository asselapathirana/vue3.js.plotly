<script setup >
import PlotlyEx from './PlotlyEx.vue'
import DataChanger from './DataChanger.vue'
</script>

<template>




<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>Plotly with Vue.js 3, Pinia and Bootstrap 5</h1>
  <p>Presse the button to see the effect!</p> 
  <data-changer />
</div>
  
<div class="container mt-5">
  <div class="row ">
    <div class="col-md-4">
    <div class="card">
    <h3 class="text-center">Line </h3>
    <div >
        <PlotlyEx type="scatter"  />
    </div>
    </div>
    </div>
    <div class="col-md-4">
        <div class="card">
            <h3 class="text-center">Fill</h3>
            <div >
                <PlotlyEx type="scatter" fill="tozeroy" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card">
            <h3 class="text-center">Bar</h3>        
            <div >
                <PlotlyEx type="bar" />
            </div>
        </div>
    </div>
  </div>
</div>

</template>


<script setup >
//import pinia store and instantiate
import { useDataStore } from '../stores/data'
const storeData = useDataStore()
</script>

<template>
    <!-- Fires the changeData function in data.js pinia store -->
    <button  @click="storeData.changeData">CHANGE
    </button>
</template>


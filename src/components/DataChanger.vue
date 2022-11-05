<script setup >
import { useDataStore } from '../stores/data'
const storeData = useDataStore()
</script>

<template>
      <button  @click="storeData.changeData">CHANGE
    </button>
</template>


<script setup>
import {ref} from "vue"
const count = ref(0);

const addToCount = () => {
  count.value = count.value + 1
}
const subtractFromCount = () => {
  count.value = count.value - 1
}
</script>

<template>

  <div>
    <h1>{{count}}</h1>

    <button @click="subtractFromCount">-</button>
    <button @click="addToCount()">+</button>
  </div>

</template>

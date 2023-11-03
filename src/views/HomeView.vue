<script setup>
import {ref} from "vue"
const showDiv = ref(false);
</script>

<template>

  <div>
    Homa page

    <div>
      content: <span v-show="showDiv">show</span>
    </div>


    <div>
      <button @click="showDiv = true">open</button>
      <button @click="showDiv = false">close</button>
    </div>


  </div>

</template>

<script setup>

import {ref} from "vue"

const inputValue = ref('');
const notes = ref([]);

const addNotes = () => {
  notes.value.push({
    text: inputValue.value,
    date: new Date()
  })
  inputValue.value = ""
}

</script>

<template>

  <div>
    <input name="input" v-model="inputValue">
    <button @click="addNotes">add data</button>
  </div>


  <div v-for="note in notes" :key="note.date">
    <p>{{note.text}}</p>
    <p>{{note.date.toDateString()}}</p>
  </div>

</template>

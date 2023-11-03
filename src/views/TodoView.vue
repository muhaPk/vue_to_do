<script setup>

import TodoItem from "../components/UI/TodoItem"

import {ref} from "vue";


const listStorage = localStorage.getItem("list")
const listStorageData = JSON.parse(listStorage)

const inputValue = ref('');
const textareaValue = ref('');
const list = ref(listStorageData ? listStorageData : []);


const filterOpen = () => list.value = listStorageData.filter((data) => data.status === 1)
const filterDone = () => list.value = listStorageData.filter((data) => data.status === 2)
const filterReset = () => list.value = listStorageData


const add = () => {
  list.value.push({
    id: list.value.length + 1,
    name: inputValue.value,
    description: textareaValue.value,
    status: 1,
  })
  inputValue.value = ""
  textareaValue.value = ""
  localStorage.setItem("list", JSON.stringify(list.value))
}

const remove = id => {
  list.value = list.value.filter((obj) => obj.id !== id)
  localStorage.setItem("list", JSON.stringify(list.value))
}

const done = id => {

  const obj = list.value.find((obj) => obj.id === id)
  const status = obj.status
  const index = list.value.indexOf(obj)

  let newObj = obj
  newObj.status = status === 1 ? 2 : 1

  list.value.splice(index, 1, newObj)

  localStorage.setItem("list", JSON.stringify(list.value))
}

</script>

<template>

  <div>

    <h1>Todo</h1>

    <button @click="filterOpen">Open</button>
    <button @click="filterDone">Done</button>
    <button @click="filterReset">Reset</button>

    <div v-if="list.length">
      <TodoItem v-for="item in list" :key="item.id" :item="item" @remove="remove" @done="done"></TodoItem>
    </div>

    <div v-else>empty list </div>

    <br />

    <div class="form">
      <input name="input" v-model="inputValue">
      <textarea v-model="textareaValue" name="description" />
      <button @click="add">add data</button>
    </div>

  </div>

</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}
</style>

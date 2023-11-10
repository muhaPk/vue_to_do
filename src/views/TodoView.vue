<script setup>

import TodoItem from "../components/UI/TodoItem"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ref} from "vue";


const listStorage = localStorage.getItem("list")
const listStorageData = JSON.parse(listStorage)

const inputValue = ref('');
const textareaValue = ref('');
const list = ref(listStorageData ? listStorageData : []);
const date = ref(new Date());

const filterOpen = () => list.value = listStorageData.filter((data) => data.status === 1)
const filterDone = () => list.value = listStorageData.filter((data) => data.status === 2)
const filterReset = () => list.value = listStorageData


const add = () => {
  list.value.push({
    id: list.value.length + 1,
    name: inputValue.value,
    description: textareaValue.value,
    date: date,
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

const edit = (id, value) => {
  const obj = list.value.find((obj) => obj.id === id)
  const index = list.value.indexOf(obj)

  let newObj = obj
  newObj.name = value
  list.value.splice(index, 1, newObj)

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

  <div class="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">

    <button class="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline" @click="filterOpen">Open</button>
    <button class="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline" @click="filterDone">Done</button>
    <button class="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline" @click="filterReset">Reset</button>



    <div v-if="list.length" class="mt-4">
      <TodoItem v-for="item in list" :key="item.id" :item="item" @remove="remove" @done="done" @edit="edit"></TodoItem>
    </div>

    <div v-else>empty list </div>

  </div>


  <div class="w-full max-w-sm mx-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <div class="mb-4">
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="text"
            name="input"
            v-model="inputValue"
        >
      </div>

      <div class="mb-4">
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="description"
            name="description"
            v-model="textareaValue"
        >
      </div>

      <div class="mb-4">
        <VueDatePicker v-model="date"></VueDatePicker>
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-blue-500 mx-auto hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="add">
          Add data
        </button>
      </div>

    </form>

  </div>

</template>



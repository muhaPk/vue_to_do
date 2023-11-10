<script setup>
import {defineProps, defineEmits, ref} from "vue"
  import moment from "moment"

  const emit = defineEmits(["remove", "done", "edit"])

  const emitRemove = id => emit("remove", id)
  const emitDone = id => emit("done", id)
  const emitEdit = (id, value) => emit("edit", id, value)

  const inputValue = ref('');
  const inputId = ref(false);
  const changeInputId = id => inputId.value = id
  const resetInputId = () => inputId.value = false

  const props = defineProps(['item'])

  const dateFormat = moment(props?.item?.date).format('DD.MM.YYYY')

</script>

<template>

  <div class="flex items-center">

    <div v-show="!!inputId" class="flex w-full my-0.5">
      <input
          class="shadow text-xs appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="text"
          name="input"
          v-model="inputValue"
      >
      <button class="bg-red-600 text-xs hover:bg-red-700 text-white font-bold px-2 ml-1 rounded focus:outline-none focus:shadow-outline" @click="emitEdit(props.item.id, inputValue); resetInputId();">save</button>
    </div>

    <div v-show="!inputId" class="mr-auto text-sm" :class="props.item.status === 2 && 'line-through text-slate-300'">
      {{ props.item.id }}:
      <strong>{{ props.item.name }}</strong>
      {{props.item.description}}
    </div>
    <span v-show="!inputId" class="text-xs mr-2">{{dateFormat}}</span>

    <input v-show="!inputId" @click="emitDone(props.item.id)" type="checkbox">
    <button v-show="!inputId" class="text-xs text-white font-bold px-1 ml-1 rounded focus:outline-none focus:shadow-outline" @click="changeInputId(props.item.id)">
      <svg class="h-4 w-4 text-red-500" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
    </button>
    <button v-show="!inputId" class="bg-red-600 text-xs hover:bg-red-700 text-white font-bold px-1 ml-1 rounded focus:outline-none focus:shadow-outline" @click="emitRemove(props.item.id)">&times;</button>

  </div>
</template>

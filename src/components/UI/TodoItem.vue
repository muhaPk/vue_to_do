<script setup>
  import {defineProps, defineEmits} from "vue"

  const emit = defineEmits(["remove", "done"])

  const emitRemove = id => emit("remove", id)

  const emitDone = id => emit("done", id)


  const props = defineProps(['item'])


</script>

<template>

  <div class="wrapper">
    <div class="task" :class="props.item.status === 2 && 'done'">{{ props.item.id }}: <strong>{{ props.item.name }}</strong> {{props.item.description}}</div>
    <button @click="emitRemove(props.item.id)">&times;</button>

    <input @click="emitDone(props.item.id)" type="checkbox" name="vehicle1" value="Bike">

  </div>
</template>

<style>

.wrapper {
  display: flex;
  justify-content: end;
  width: 300px;
  text-align: left;
  margin: 2px auto;
}

.task {
  margin-right: auto;
}

button {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: #ccc;
}

</style>

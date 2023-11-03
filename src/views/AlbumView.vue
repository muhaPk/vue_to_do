<script setup>
  import {useRoute} from "vue-router"

  const route = useRoute()
  import {ref} from "vue";

  const album = ref();

  async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${parseInt(route.params.id)}`);
    album.value = await res.json();
  }
  getData()

</script>

<template>

  <div v-if="!!album">

    <h2>{{album.title}}</h2>

    id: {{album.id}} <br />
    userId: {{album.userId}}
  </div>

  <div v-else>loading..</div>

</template>

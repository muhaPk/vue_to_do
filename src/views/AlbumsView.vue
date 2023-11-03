<script setup>

import {ref} from "vue";

const albums = ref();

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  albums.value = await res.json();
}
getData()

</script>

<template>



    <h2>Albums</h2>
    <ul style="list-style-type: none; padding: 0;" v-if="!!albums">
      <li v-for="album in albums" :key="album.id">
        <router-link :to="`/album/${album.id}`">{{album.id}}: {{album.title}}</router-link>
      </li>
    </ul>

    <div v-else>loading..</div>



</template>

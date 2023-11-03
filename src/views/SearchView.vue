<script setup>

import Albums from "../components/UI/AlbumsRender"
import {ref, watch} from "vue"

const albumsData = ref();
const albums = ref();

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  albumsData.value = await res.json();
}
getData()


const search = ref("");

watch(search, () => {
  albums.value = albumsData.value.filter(album => album.title.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>

  <div>
    <input v-model.trim="search" type="text" placeholder="Search" />
    <Albums v-for="album in albums || albumsData" :key="album.id" :album="album" />
  </div>

</template>

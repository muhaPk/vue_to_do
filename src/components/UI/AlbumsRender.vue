<script setup>
  import {defineProps} from "vue"

  const props = defineProps(['album'])

</script>

<template>

  <div>
    {{props.album.id}}:  {{props.album.title}}
  </div>
</template>

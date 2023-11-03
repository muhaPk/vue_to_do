<template>
  <div>

    <router-link active-class="active" to="/">Home</router-link>
    <router-link active-class="active" to="/about">About</router-link>
    <router-link active-class="active" to="/notes">Notes</router-link>
    <router-link active-class="active" to="/search">Search</router-link>
    <router-link active-class="active" to="/albums">Albums</router-link>
    <router-link active-class="active" to="/todo">Todo</router-link>
  </div>
</template>

<style scoped>
.active {
  font-weight: bold;
}
a {
  margin: 0 5px;
}
</style>

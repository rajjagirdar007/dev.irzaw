<template>
<dheader></dheader>
  <div class="home">
    <div class="content">
      <h1><a href="/login" style="color: white; text-decoration: none;">projects.</a></h1>
      <h1>people.</h1>
      <h1>expertise.</h1>
    </div>
  </div>
</template>

<style>
.home {
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
}

h1 {
  color: white;
  font-size: 48px;
  margin: 10px 0;
}
</style>

<script>
 import dheader from '@/components/header/main_header.vue';
export default {
  name: 'App',
  components: {
    dheader,
  },
}
</script>

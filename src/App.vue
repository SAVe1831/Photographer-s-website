<template>
  <Drawer v-if="drawerOpen" :close-drawer="closeDrawer" />
  <Header :open-drawer="openDrawer"/>
  <router-view></router-view>
  <Footer />
  <ScrollTop />
</template>


<script setup>
import { ref } from 'vue';
import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
import Footer from "./components/Footer.vue";

const drawerOpen = ref(false);

const openDrawer = () => {
  drawerOpen.value = true;
}

const closeDrawer = () => {
  drawerOpen.value = false;
}

</script>


<style scoped>
.p-scrolltop  {
  position: fixed;
  right: 1rem;
  bottom: 3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition-duration: 0.3s;
}
.p-scrolltop:hover {
  background-color: #708379;
}
</style>

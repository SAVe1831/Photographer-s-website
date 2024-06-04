<template>
    <div class="drawer fixed top-0 left-0 w-full h-full flex flex-column">
        <div class="w-full flex justify-content-end">
            <img @click="closeDrawer" src="/icons/x-close.png" alt="close" class="x-close w-2rem cursor-pointer mt-4 mr-4">
        </div>
        <div class="menu-links flex flex-column  px-6" @click="closeDrawer">
            <h4 :class="isLinkActive('/')"><router-link to="/">Главная</router-link></h4>
            <h4>Портфолио</h4>
            <p :class="isLinkActive('/portfolio/pregnant-photosession')"><router-link to="/portfolio/pregnant-photosession">Фотосессия беременных</router-link></p>
            <p :class="isLinkActive('/portfolio/wedding-photosession')"><router-link to="/portfolio/wedding-photosession">Свадебная фотосессия</router-link></p>
            <p :class="isLinkActive('/portfolio/family-photosession')"><router-link to="/portfolio/family-photosession">Семейная фотосессия</router-link></p>
            <p :class="isLinkActive('/portfolio/child-photosession')"><router-link to="/portfolio/child-photosession">Детская фотосессия</router-link></p>
            <p :class="isLinkActive('/portfolio/individual-photosession')"><router-link to="/portfolio/individual-photosession">Индивидуальная фотосессия</router-link></p>
            <p :class="isLinkActive('/portfolio/graduation-album')"><router-link to="/portfolio/graduation-album">Выпускные альбомы</router-link></p>
            <h4 :class="isLinkActive('/stories')"><router-link to="/stories">Истории</router-link></h4>
            <h4 :class="isLinkActive('/services-and-prices')"><router-link to="/services-and-prices">Услуги и цены</router-link></h4>
            <h4 :class="isLinkActive('/reviews')"><router-link to="/reviews">Отзывы</router-link></h4>
            <h4 :class="isLinkActive('/contacts')"><router-link to="/contacts">Контакты</router-link></h4>
        </div>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isLinkActive = (path) => {
  return route.path === path ? 'active' : '';
};

const props = defineProps({
    closeDrawer: Function
})

</script>


<style scoped>
.drawer {
    background-color: #1e2421;
}
h4, p {
    margin-top: 0;
    margin-bottom: 8px;
}
h4 {
    text-transform: uppercase;
    font-size: 16px;
}
p {
    font-size: 14px;
    margin-left: 15px;
}
.active {
  text-decoration: underline;
}
</style>
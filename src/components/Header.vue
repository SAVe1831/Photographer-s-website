<template>
    <div class="header flex flex-row justify-content-between md:flex-column align-items-center px-3 py-2 sm:p-3 md:px-0 md:py-6">
        <router-link to="/" class="wrapper-header-logo flex justify-content-center w-5">
            <img src="/images/header-logo.png" alt="header-logo" class="header-logo w-full">
        </router-link>
        <div class="menu flex justify-content-center">
            <ul class="menu-links justify-content-center w-full list-none p-0 hidden md:flex">
                <li :class="isLinkActive('/')"><router-link to="/">Главная</router-link></li>
                <li class="dropdown relative" @mouseenter="openDropdown" @mouseleave="closeDropdown">Портфолио <img :src="isDropdown ? 'icons/arrow-down.jpg' : 'icons/arrow-up.jpg'" alt="" class="w-1rem">
                    <ul class="dropdown-menu hidden" @click="closeDropdown" @mouseleave="closeDropdown">
                        <li :class="isLinkActive('/portfolio/pregnant-photosession')"><router-link to="/portfolio/pregnant-photosession">Фотосессия беременных</router-link></li>
                        <li :class="isLinkActive('/portfolio/wedding-photosession')"><router-link to="/portfolio/wedding-photosession">Свадебная фотосессия</router-link></li>
                        <li :class="isLinkActive('/portfolio/family-photosession')"><router-link to="/portfolio/family-photosession">Семейная фотосессия</router-link></li>
                        <li :class="isLinkActive('/portfolio/child-photosession')"><router-link to="/portfolio/child-photosession">Детская фотосессия</router-link></li>
                        <li :class="isLinkActive('/portfolio/individual-photosession')"><router-link to="/portfolio/individual-photosession">Индивидуальная фотосессия</router-link></li>
                        <li :class="isLinkActive('/portfolio/graduation-album')"><router-link to="/portfolio/graduation-album">Выпускные альбомы</router-link></li>
                    </ul>
                </li>
                <li :class="isLinkActive('/stories')"><router-link to="/stories">Истории</router-link></li>
                <li :class="isLinkActive('/services-and-prices')"><router-link to="/services-and-prices">Услуги и цены</router-link></li>
                <li :class="isLinkActive('/reviews')"><router-link to="/reviews">Отзывы</router-link></li>
                <li :class="isLinkActive('/contacts')"><router-link to="/contacts">Контакты</router-link></li>
            </ul>
            <div class="burger-menu md:hidden flex flex-column align-items-end" @click="openDrawer">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isLinkActive = (path) => {
  return route.path === path ? 'active' : '';
};

const props = defineProps({
    openDrawer: Function
});

const isDropdown = ref(false);

const openDropdown = () => {
    if (isDropdown.value === false) {
        document.querySelector('.dropdown-menu').classList.remove('hidden');
        isDropdown.value = true;
    } else {
        closeDropdown();
    }
};

const closeDropdown = () => {
document.querySelector('.dropdown-menu').classList.add('hidden');
isDropdown.value = false;
};

</script>


<style scoped>
.menu-links {
    text-transform: uppercase;
}
li {
    margin: 0 14px;
    cursor: pointer;
}
li:hover {
    color: rgb(247, 234, 234);
    text-decoration: underline;
}
.burger-menu {
    display: block;
    cursor: pointer;
}
.burger-menu div div {
    width: 25px;
    height: 3px;
    background-color: #c3c3c3;
    margin: 5px 0;
}
.dropdown-menu {
    width: 200px;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1e2421;
    list-style-type: none;
    padding: 10px;
    border-radius: 10px;
}
.dropdown:hover .dropdown-menu {
    display: block;
}
.dropdown-menu li {
    text-transform: none;
    margin: 10px 0;
    font-size: 14px;
}
.active {
  text-decoration: underline;
}
</style>
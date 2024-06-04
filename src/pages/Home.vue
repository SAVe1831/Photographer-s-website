<template>
    <div class="flex flex-column align-items-center z-1">
        <img src="/images/home-pic.jpg" alt="Семейная фотосессия" class="w-full">
        <router-link to="/contacts"><button class="btn w-18rem h-4rem border-round-3xl text-white text-2xl cursor-pointer">Забронировать дату</button></router-link>
        <div class="text-container w-11 md:w-7">
            <h2 class="mt-8 text-center">Фотограф в Краснодаре и Краснодарском крае Карина Пегова</h2>
            <p>Добро пожаловать на мой сайт! Меня зовут Карина — я семейный, свадебный и детский фотограф.</p>
            <p>Фотосессия — не просто процесс, это любимое занятие, которое приносит удовольствие не только мне, но и моим моделям. Я постоянно обучаюсь и повышаю свой профессиональный уровень. Помогу сохранить самые важные моменты вашей жизни. </p>
            <p>Молодожены, семейные пары, дети, выпускники — добро пожаловать в мир магии фотографии!</p>
        </div>
        <div class="photo-container flex flex-column justify-content-between md:flex-row md:w-11 lg:w-10">
                <div class="flex flex-column align-items-center border-white border-1 border-round-bottom-xl w-11 md:w-4 lg:w-3 mx-auto mt-5">
                    <img src="/images/family-photosession/family-photosession-1.jpg" alt="family-photosession" class="w-full">
                    <router-link to="/portfolio/family-photosession"><p>Семейная фотосессия</p></router-link>
                </div>
                <div class="flex flex-column align-items-center border-white border-1 border-round-bottom-xl w-11 md:w-4 lg:w-3 mx-auto mt-5">
                    <img src="/images/wedding-photosession/wedding-photosession-1.jpg" alt="wedding-photosession" class="w-full">
                    <router-link to="/portfolio/wedding-photosession"><p>Свадебная фотосессия</p></router-link>
                </div>
                <div class="flex flex-column align-items-center border-white border-1 border-round-bottom-xl w-11 md:w-4 lg:w-3 mx-auto mt-5">
                    <img src="/images/child-photosession/child-photosession-1.jpg" alt="child-photosession" class="w-full">
                    <router-link to="/portfolio/child-photosession"><p>Детская фотосессия</p></router-link>
                </div>
        </div>
    </div> 
</template>


<script setup>

</script>

<style scoped>
.btn {
    background-color: #708379;
}
.btn:hover {
    background-color: #464646;
}
</style>
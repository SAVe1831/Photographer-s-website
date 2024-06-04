<template>
    <div class="w-11 mx-auto">
        <h1 class="text-center">Выпускной альбом</h1>
    </div>
    <div class="photo-container w-11 mx-auto flex justify-content-between flex-wrap align-content-between">
        <img src="/images/graduation-album/graduation-album-1.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-2.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-3.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-4.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-5.jpg" class="horizontal">
        <img src="/images/graduation-album/graduation-album-6.jpg" class="horizontal">
        <img src="/images/graduation-album/graduation-album-7.jpg" class="horizontal">
        <img src="/images/graduation-album/graduation-album-8.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-9.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-10.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-11.jpg" class="vertical">
        <img src="/images/graduation-album/graduation-album-12.jpg" class="horizontal">
        <img src="/images/graduation-album/graduation-album-13.jpg" class="horizontal">
        <img src="/images/graduation-album/graduation-album-14.jpg" class="horizontal">
    </div>
</template>


<script setup>

</script>

<style scoped>
.photo-container .vertical {
    width: 100%;
    margin-top: 5px;
}
.photo-container .horizontal {
    width: 100%;
    margin-top: 5px;
}
@media (min-width: 600px) and (max-width: 1200px) {
    .photo-container .vertical {
        width: 49.7%;
        margin-top: 5px;
    }
    .photo-container .horizontal {
        width: 100%;
        margin-top: 5px;
    }
}
@media (min-width: 1201px) {
    .photo-container .vertical {
        width: 24.7%;
        margin-top: 5px;
    }
    .photo-container .horizontal {
        width: 33%;
        margin-top: 5px;
    }
}
</style>
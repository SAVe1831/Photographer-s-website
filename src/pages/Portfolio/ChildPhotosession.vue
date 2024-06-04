<template>
    <div class="w-11 mx-auto">
        <h1 class="text-center">Детская фотосессия</h1>
    </div>
    <div class="photo-container w-11 mx-auto flex justify-content-between flex-wrap align-content-between">
        <img src="/images/child-photosession/child-photosession-1.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-2.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-3.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-4.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-5.jpg" class="horizontal">
        <img src="/images/child-photosession/child-photosession-6.jpg" class="horizontal">
        <img src="/images/child-photosession/child-photosession-7.jpg" class="horizontal">
        <img src="/images/child-photosession/child-photosession-8.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-9.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-10.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-11.jpg" class="vertical">
        <img src="/images/child-photosession/child-photosession-12.jpg" class="horizontal">
        <img src="/images/child-photosession/child-photosession-13.jpg" class="horizontal">
        <img src="/images/child-photosession/child-photosession-14.jpg" class="horizontal">
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
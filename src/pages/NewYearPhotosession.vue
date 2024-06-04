<template>
    <div class="w-11 md:w-7 text-center mx-auto">
        <h1>Новогодние фотосессии</h1>
        <p>Друзья, приглашаю вас на новогодние съемки. Сейчас самое время назначать встречи в фотостудиях, а потом будем проводить съемки в красивых локациях нашего города</p>
    </div>
    <div class="photo-container w-11 mx-auto flex justify-content-between flex-wrap align-content-between mt-8">
        <img src="/images/new-year-photosession/new-year-photosession-1.jpg" class="horizontal">
        <div class="box flex justify-content-between flex-wrap align-content-between">
            <img src="/images/new-year-photosession/new-year-photosession-2.jpg" class="vertical">
            <img src="/images/new-year-photosession/new-year-photosession-3.jpg" class="horizontal">
        </div>
        <div class="box flex justify-content-between flex-wrap align-content-between">
            <img src="/images/new-year-photosession/new-year-photosession-4.jpg" class="vertical">
            <img src="/images/new-year-photosession/new-year-photosession-5.jpg" class="horizontal">
        </div>
        <img src="/images/new-year-photosession/new-year-photosession-6.jpg" class="horizontal">
        <img src="/images/new-year-photosession/new-year-photosession-7.jpg" class="horizontal">
        <img src="/images/new-year-photosession/new-year-photosession-8.jpg" class="horizontal">
        <img src="/images/new-year-photosession/new-year-photosession-9.jpg" class="horizontal">
        <img src="/images/new-year-photosession/new-year-photosession-10.jpg" class="horizontal">
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
@media (min-width: 900px) {
    .photo-container .vertical {
        width: 49.7%;
        margin-top: 5px;
    }
    .photo-container .horizontal {
        width: 100%;
        margin-top: 5px;
    }
    .box .vertical {
        width: 30.3%;
        margin-top: 5px;
    }
    .box .horizontal {
        width: 69.3%;
        margin-top: 5px;
    }
}
</style>
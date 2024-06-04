<template>
    <div class="flex flex-column align-items-center">
        <h2>Мой номер телефона<br> +7(999)999-99-99</h2>
        <a href="tel:+79999999999"><button class="btn w-18rem h-4rem border-round-3xl text-white text-2xl cursor-pointer">Позвонить</button></a>
        <a href="https://api.whatsapp.com/send?phone=79999999999"><button class="btn w-18rem h-4rem border-round-3xl text-white text-2xl cursor-pointer my-5">Написать в WhatsApp</button></a>
        <a href="tg://resolve?domain=save1831"><button class="btn w-18rem h-4rem border-round-3xl text-white text-2xl cursor-pointer">Написать в Telegram</button></a>
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
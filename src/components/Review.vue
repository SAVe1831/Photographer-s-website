<template>
    <div class="reviews-container w-10 h-auto my-3 p-4 border-round-xl">
        <p><span>{{ props.review.name }}</span> пишет:</p><br>
        <p>{{ props.review.review }}</p>
    </div>
</template>


<script setup>

const props = defineProps({
    review: Object
})

</script>


<style scoped>
.reviews-container {
    background-color: #2d3632;
}
p {
    margin: 0;
    font-size: 20px;
}
span {
    color: rgb(178, 41, 171);
}
</style>
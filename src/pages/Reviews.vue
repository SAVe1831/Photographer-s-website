<template>
    <div class="w-11 mx-auto flex flex-column align-items-center">
        <h1>Отзывы клиентов</h1>
        <Review v-for="review in reviewsResponse" :key="review.id" :review="review"></Review>
        <div class="review-form w-12 h-auto border-round-xl flex flex-column align-items-center">
            <h2>Оставьте и Вы свой отзыв</h2>
            <input v-model="nameInput" class="w-11 h-4rem text-2xl border-round-3xl text-white px-3 sm:w-7 md:w-5 xl:w-3" type="text" placeholder="Ваше имя...">
            <textarea v-model="reviewInput" class="w-11 h-18rem text-2xl border-round-3xl text-white p-3 my-4 md:w-8 xl:w-6" placeholder="Ваш отзыв..."></textarea>
            <button @click="addReview" class="btn w-full h-4rem border-round-3xl text-white text-2xl cursor-pointer sm:w-6 md:w-3 xl:w-2">Отправить</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Review from '../components/Review.vue';

const nameInput = ref('');
const reviewInput = ref('');

const reviewsResponse = ref([]);

const addReview = () => {
    try {
        const obj = {
            name: nameInput.value, 
            review: reviewInput.value   
        }
        const data = axios.post('https://8800426de92338e1.mokky.dev/reviews', obj);
    } catch (err) {
        console.log(err);
    } finally {
        nameInput.value = '';
        reviewInput.value = '';
        alert('Ваш отзыв успешно добавлен!');
    }
}  

const getReviews = async () => {
    try {
        const response = await axios.get('https://8800426de92338e1.mokky.dev/reviews');
        reviewsResponse.value = response.data;
    } catch (err) {
        console.log(err);
    }
}
getReviews();

</script>


<style scoped>
.btn, input, textarea {
    background-color: #708379;
}
input::placeholder, textarea::placeholder {
  color: #ffffff;
}
.btn:hover {
    background-color: #464646;
}
</style>
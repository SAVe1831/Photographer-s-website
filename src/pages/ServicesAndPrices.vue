<template>
    <div class="flex flex-column">
        <div class="w-11 md:w-7 text-center mb-6 mx-auto">
            <h1>Стоимость разных видов съёмки</h1>
            <p>Здесь вы можете посмотреть информацию о пакетах предоставляемых услуг и их стоимости</p>
        </div>
        <div class="author w-11 mx-auto flex flex-column lg:flex-row justify-content-around align-items-center">
            <div class="author-photo w-full flex justify-content-center">
                <img src="/images/author.jpeg" class="w-full max-w-30rem">
            </div>
            <div class="author-info flex flex-column w-11 lg:px-5 mb-3">
                <h2>Здравствуйте!<br>
                    Меня зовут Карина Пегова.
                </h2>
                <p class="mt-4">
                    Я провожу фотосессии в Краснодаре и Краснодарском крае.<br><br>
                    Если вы не можете определиться с пакетом услуг, я с удовольствием помогу!<br><br>   
                    Как только вы определитесь с датой, мы с вами подберём образ, выберем локацию, обсудим концепцию фотосъемки.<br><br>
                    Все ваши важные моменты в жизни я готова сохранить!<br><br>
                    Говорят, что со мной время пролетает незаметно!
                </p>
                <div class="flex justify-content-center">
                    <router-link to="/contacts"><button class="btn w-18rem h-4rem border-round-3xl text-white text-2xl cursor-pointer">Связаться со мной</button></router-link>
                </div>
            </div>
        </div>
        <div class="w-11 mx-auto flex justify-content-around mt-3 flex-column md:flex-row">
            <div class="w-11 border-white border-1 border-round-xl p-2 mx-auto mb-3 md:w-5 md:p-4">
                <h2 class="text-center">Пакет « Базовый »</h2>
                <ul>
                    <li>Консультация по подбору образа;</li>
                    <li>Фотосъемка на прогулке, дома или в студии;</li>
                    <li>20 лучших фотографий в авторской обработке с детальной ретушью;</li>
                    <li>От 50 фото в базовой цветокоррекции;</li>
                    <li>Дизайнерское оформление заказа.</li>
                </ul>
                <p>Срок выполнения <b>2 недели.</b></p>
                <p>Стоимость <b>4 000 руб.</b></p>
            </div>
            <div class="w-11 border-white border-1 border-round-xl p-2 mx-auto mb-3 md:w-5 md:p-4">
                <h2 class="text-center">Крестины</h2>
                <ul>
                    <li>Фоторепортаж c крестин;</li>
                    <li>Постановочные кадры возле храма и внутри;</li>
                    <li>Авторская обработка фотографий;</li>
                    <li>Дизайнерское оформление заказа.</li>
                </ul>
                <p>Срок выполнения <b>2 недели.</b></p>
                <p>Стоимость <b>4 000 руб.</b></p>
            </div>
        </div>
        <div class="w-11 mx-auto flex justify-content-around flex-column md:flex-row">
            <div class="w-11 border-white border-1 border-round-xl p-2 mx-auto mb-3 md:w-5 md:p-4">
                <h2 class="text-center">Свадебная съемка</h2>
                <ul>
                    <li>Консультация при подготовке к съемке;</li>
                    <li>Подбор мест для фотосессии, разработка маршрута;</li>
                    <li>Авторская обработка фотографий, художественная ретушь;</li>
                    <li>Закрытый доступ к фотографиям на облачном диске;</li>
                    <li>Дизайнерское оформление заказа;</li>
                    <li>Фотоальбом в подарок.</li>
                </ul>
                <p>Срок выполнения <b>30 дней.</b></p>
                <p>Стоимость <b>25 000 руб</b> (за весь свадебный день)</p>
                <p>* возможна почасовая съемка мероприятия (<b>4 000 руб./ час</b>).</p>
            </div>
            <div class="w-11 border-white border-1 border-round-xl p-2 mx-auto mb-3 md:w-5 md:p-4">
                <h2 class="text-center">Будуарная фотосессия</h2>
                <ul>
                    <li>Консультация по подбору образа;</li>
                    <li>Фотосъемка на прогулке, дома или в студии;</li>
                    <li>20 лучших фотографий в авторской обработке с детальной ретушью;</li>
                    <li>От 50 фото в базовой цветокоррекции;</li>
                    <li>Дизайнерское оформление заказа.</li>
                </ul>
                <p>Срок выполнения <b>2 недели.</b></p>
                <p>Стоимость <b>4 000 руб.</b></p>
            </div>
        </div>
        <div class="w-11 mx-auto flex justify-content-around flex-column md:flex-row">
            <div class="w-11 border-white border-1 border-round-xl p-2 mx-auto mb-3 md:w-5 md:p-4">
                <h2 class="text-center">Выпускные альбомы</h2>
                <p>Помогу сохранить память о садике, школе, колледже, институте…</p>
                <ul>
                    <li>Общее фото / виньетка (формат А4) — <b>600 руб.</b>;</li>
                    <li>Папка — <b>1 500 руб.</b>;</li>
                    <li>Альбом 3 разворота — <b>1900 руб.</b>;</li>
                    <li>Альбом 5 разворотов (общий) — <b>2100 руб.</b>;</li>
                    <li>Альбом 5 разворот (индивидуальный) — <b>2 500 руб.</b>;</li>
                    <li>Альбом 10 разворотов (индивидуальный) — <b>3500 руб.</b>;</li>
                    <li>Множество разнообразных макетов (по запросу).</li>
                </ul>
                <p>Срок выполнения <b>45 дней, с момента последней съемки.</b></p>
            </div>
            <div class="w-11 border-white border-1 border-round-xl p-2 mx-auto mb-3 md:w-5 md:p-4">
                <h2 class="text-center">Репортажная съемка</h2>
                <ul>
                    <li>Репортажная съемка мероприятия;</li>
                    <li>Постановочная фотосессия у фотозоны;</li>
                    <li>Все удачные фото в цветокоррекции;</li>
                    <li>Закрытый доступ к фотографиям на облачном диске.</li>
                </ul>
                <p>Срок выполнения <b>1 недели.</b></p>
                <p>Стоимость <b>4 000 руб.</b></p>
            </div>
        </div>
        <div class="line"></div>
        <div class="attention mx-auto w-11 lg:w-8">
            <h2 class="text-center text-3xl">Обратите внимание!</h2>
            <p>**Бронь необходимой даты происходит по предоплате. Полная оплата — в день съёмки.</p>
            <p>**Аренда студии, образов, животных, услуги визажиста оплачиваются отдельно.</p>
            <p>**Выезд за территорию Краснодара — дополнительно оплачивается.</p>
            <p>Дополнительно:</p>
            <ul>
                <li>При желании Вы всегда можете заказать ретушь дополнительных фотографий — 300 руб. за 1 шт.</li>
                <li>Дизайнерские фотокниги  20x20 см, 25x25 см, 30x30 см, 30x24 см на 10-20 разворотов.</li>
                <li>Дубликат книги для родственников.</li>
                <li>Печать на холсте.</li>
                <li>Подарочные сертификаты на любой вид съемки.</li>
            </ul>
        </div>
    </div>
    
    
    
</template>


<script setup>

</script>   

<style scoped>
.author {
    background-color: #2d3632;
}
.btn {
    background-color: #708379;
}
.btn:hover {
    background-color: #464646;
}
.line {
    content: '';
    background-color: rgb(143, 142, 142);
    height: 5px;
    display: block;
    width: 90%;
    margin: 30px auto;
    
}
</style>
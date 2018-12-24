<template>
    <div class="g-programbar">
        <swiper :options="swiperOption">
            <swiper-slide><img src="../assets/images/cont/slider_img1.png" class="swiperimg"></swiper-slide>
            <swiper-slide><img src="../assets/images/cont/slider_img2.png" class="swiperimg"></swiper-slide>
            <swiper-slide><img src="../assets/images/cont/slider_img3.png" class="swiperimg"></swiper-slide>
            <swiper-slide><img src="../assets/images/cont/slider_img4.png" class="swiperimg"></swiper-slide>
        </swiper>
        <!--以下看需要添加-->
        <!-- <div class="swiper-scrollbar"></div> //滚动条 -->
        <div class="swiper-button-next"></div> //下一项
        <div class="swiper-button-prev"></div> //上一项
        <!-- <div class="swiper-pagination"></div> //标页码 -->
        <!-- <div class="swiper-pagination"></div> -->
    </div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data() {
    return {
        swiperOption: {//swiper3
            autoplay: {
                delay: 4000,//2秒切换一次
                speed:1500,
            },
            loop:true,
        }
    }
    },
    components: {
        swiper,
        swiperSlide
    }   
}
</script>

<style>
</style>

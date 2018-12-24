<template>
    <div class="f-flexrw">
        <div class="m-picbar">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../assets/images/cont/slider_img1.png" class="swiperimg"></swiper-slide>
                <swiper-slide><img src="../assets/images/cont/slider_img2.png" class="swiperimg"></swiper-slide>
                <swiper-slide><img src="../assets/images/cont/slider_img3.png" class="swiperimg"></swiper-slide>
                <swiper-slide><img src="../assets/images/cont/slider_img4.png" class="swiperimg"></swiper-slide>
            </swiper>
            <!--以下看需要添加-->
            <!-- <div class="swiper-scrollbar"></div> //滚动条
            <div class="swiper-button-next"></div> //下一项
            <div class="swiper-button-prev"></div> //上一项
            <div class="swiper-pagination"></div> //标页码 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="m-listbar f-pr">
            <swiper :options="listbarOption">
                <swiper-slide>
                    <div class="listshow">
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="listshow">
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="listshow">
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="listshow">
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20 marright20"></program-list>
                        <program-list class="marbtm20"></program-list>
                    </div>
                </swiper-slide>
            </swiper>
            <!--以下看需要添加-->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ProgramList from '../components/ProgramList'
export default {
    data() {
    return {
        swiperOption: {//swiper3
            autoplay: {
                delay: 4000,//2秒切换一次
                speed:1500,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                //type: 'fraction',
                //type : 'progressbar',
                //type : 'custom',
                // progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
                bulletElement : 'span', //设定分页器指示器（小点）的HTML标签。
                // dynamicBullets: true,  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
                // dynamicMainBullets: 2, //动态分页器的主指示点的数量
                hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
                clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。

            },

            loop:true,
        },
        listbarOption:{//swiper3
            autoplay: {
                delay: 5000,//2秒切换一次
                speed:2000,
            },
            navigation: {
                nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
                prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
                hideOnClick: true, //点击slide时显示/隐藏按钮
                disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
                hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
            },
            loop:true,
        },
    }
    },
    components: {
        swiper,
        swiperSlide,
        ProgramList
    }
}
</script>

<style lang="less">
.swiper-pagination{
    position: relative;
    top:-30px;
    right: -280px;
    width: 200px;
    .swiper-pagination-bullet{
        display: inline-block;
        width: 18px;
        height: 18px;
        margin: 0 2px;
        background-color: #fff;
        background: url(../assets/images/page_icons.png) no-repeat -855px -790px;
        cursor: pointer;
        border: none;
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
        // background: #007aff;
        background: url(../assets/images/page_icons.png) no-repeat -855px -727px;
    }
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    // background-color: rgba(0, 0, 0, 0.6);
    left: 10px;
    right: auto;
}
</style>

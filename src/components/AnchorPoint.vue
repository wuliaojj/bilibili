<template>
    <div class="g-point" v-bind:class="{ 'g-pointfix': isActive }">
        <ul class="m-point">
            <li><a href="#zhibo" v-bind:class="{ 'pointactive': pointactive==1 }" >直播</a></li>
            <li><a href="#donghua" v-bind:class="{ 'pointactive': pointactive==2 }">动画</a></li>
            <li><a href="#fanju" v-bind:class="{ 'pointactive': pointactive==3 }">番剧</a></li>
            <li><a href="#guochuang" v-bind:class="{ 'pointactive': pointactive==4 }">国创</a></li>
            <li><a href="#yinyue" v-bind:class="{ 'pointactive': pointactive==5 }">音乐</a></li>
            <li><a href="#wudao" v-bind:class="{ 'pointactive': pointactive==6 }">舞蹈</a></li>
            <li><a href="#youxi" v-bind:class="{ 'pointactive': pointactive==7 }">游戏</a></li>
            <li><a href="#keji" v-bind:class="{ 'pointactive': pointactive==8 }">科技</a></li>
            <li><a href="#shenghuo" v-bind:class="{ 'pointactive': pointactive==9 }">生活</a></li>
            <li><a href="#guichu" v-bind:class="{ 'pointactive': pointactive==10 }">鬼畜</a></li>
            <li><a href="#shishang" v-bind:class="{ 'pointactive': pointactive==11 }">时尚</a></li>
            <li><a href="#guanggao" v-bind:class="{ 'pointactive': pointactive==12 }">广告</a></li>
            <li><a href="#yule" v-bind:class="{ 'pointactive': pointactive==13 }">娱乐</a></li>
            <li><a href="#dianying" v-bind:class="{ 'pointactive': pointactive==14 }">电影</a></li>
            <li><a href="#TV" v-bind:class="{ 'pointactive': pointactive==15 }">TV剧</a></li>
            <li class="sort">
                <a href="">
                    <i></i>
                    <span>排序</span> 
                </a>
            </li>
            <li class="topli" @click="changePoint(0)">
                <a href="#header" class="top">
                    <i ></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: '',
    data() {
        return {
            isActive:false,
            pointactive:0
        }
    },
    components: {},
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log(scrollTop)
            if(scrollTop>260){
                this.isActive=true
            }
            if(scrollTop<=260){
                this.isActive=false
            }
            switch (true) {
                case scrollTop>600&&scrollTop<1000:
                    this.pointactive=1
                    break;
                case scrollTop>1000&&scrollTop<1400:
                    this.pointactive=2
                break;
                case scrollTop>1400&&scrollTop<2300:
                    this.pointactive=3
                break;
                case scrollTop>2300&&scrollTop<3100:
                    this.pointactive=4
                break;
                case scrollTop>3100&&scrollTop<3500:
                    this.pointactive=5
                break;
                case scrollTop>3500&&scrollTop<3900:
                    this.pointactive=6
                break;
                case scrollTop>3900&&scrollTop<4300:
                    this.pointactive=7
                break;
                case scrollTop>4300&&scrollTop<4700:
                    this.pointactive=8
                break;
                case scrollTop>4700&&scrollTop<5100:
                    this.pointactive=9
                break;
                case scrollTop>5100&&scrollTop<5500:
                    this.pointactive=10
                break;
                case scrollTop>5500&&scrollTop<5900:
                    this.pointactive=11
                break;
                case scrollTop>5900&&scrollTop<6300:
                    this.pointactive=12
                break;
                case scrollTop>6300&&scrollTop<6700:
                    this.pointactive=13
                break;
                break;
                case scrollTop>6700&&scrollTop<7100:
                    this.pointactive=14
                break;
                case scrollTop>7100:
                    this.pointactive=15
                break;
                default:
                    
            }
        },
        changePoint(val){
            this.pointactive=val
        }

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>

<style lang="less">
</style>

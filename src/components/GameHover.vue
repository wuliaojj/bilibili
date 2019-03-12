<template>
    <div class="m-gamehover">
        <div class="gamepic">
            <div class="gameimg">
                <img src="../assets/images/cont/game-center__img1.jpg" alt="">
            </div>
            <div class="gameimgs">
                <ul class="gameul">
                    <li class="gameli"><a href="" class="gamea"><img src="../assets/images/cont/game_img1.png" alt=""><span>刀剑乱舞</span></a></li>
                    <li class="gameli"><a href="" class="gamea"><img src="../assets/images/cont/game_img2.png" alt=""><span>刀剑乱舞</span></a></li>
                    <li class="gameli"><a href="" class="gamea"><img src="../assets/images/cont/game_img3.jpg" alt=""><span>刀剑乱舞</span></a></li>
                </ul>
            </div>
        </div>
        <div class="gamelist">
            <div class="listtitle">
                <div class="listlogo">
                    <img src="../assets/images/game_center_title.png" alt="">
                </div>
                <div class="gametell"><a href="">游戏论坛</a></div>
            </div>
            <div class="lists">
                <ul>
                    <li>
                        <a href="" @mousemove="showimg(1)" @mouseout="noshowimg(1)">仙剑奇侠传</a>
                        <div class="listsimg" v-show="showimgae1"><img src="../assets/images/cont/game-list__img1.png" alt=""></div>
                    </li>
                    <li>
                        <a href="" @mousemove="showimg(2)" @mouseout="noshowimg(2)">魔法禁书目录</a>
                        <div class="listsimg" v-show="showimgae2"><img src="../assets/images/cont/game-list__img2.png" alt=""></div>
                    </li>
                    <li>
                        <a href="" @mousemove="showimg(3)" @mouseout="noshowimg(3)">海贼王</a>
                        <div class="listsimg" v-show="showimgae3"><img src="../assets/images/cont/game-list__img3.png" alt=""></div>
                    </li>
                    <li>
                        <a href="" @mousemove="showimg(4)" @mouseout="noshowimg(4)">火影忍者</a>
                        <div class="listsimg" v-show="showimgae4"><img src="../assets/images/cont/game-list__img4.png" alt=""></div>
                    </li>
                    <li>
                        <a href="" @mousemove="showimg(5)" @mouseout="noshowimg(5)">光明大陆</a>
                        <div class="listsimg" v-show="showimgae5"><img src="../assets/images/cont/game-list__img5.png" alt=""></div>
                    </li>
                    <li>
                        <a href="" @mousemove="showimg(6)" @mouseout="noshowimg(6)">妖精的尾巴</a>
                        <div class="listsimg" v-show="showimgae6"><img src="../assets/images/cont/game-list__img6.png" alt=""></div>
                    </li>
                    <li>
                        <a href="" @mousemove="showimg(7)" @mouseout="noshowimg(7)">家庭教师</a>
                        <div class="listsimg" v-show="showimgae7"><img src="../assets/images/cont/game-list__img7.png" alt=""></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
    return {
        showimgae1:false,
        showimgae2:false,
        showimgae3:false,
        showimgae4:false,
        showimgae5:false,
        showimgae6:false,
        showimgae7:false,
    }
    },
    components: {

    },
    methods:{
        showimg(val){
            if(val==1){
                this.showimgae1=true
            }
            if(val==2){
                this.showimgae2=true
            }
            if(val==3){
                this.showimgae3=true
            }
            if(val==4){
                this.showimgae4=true
            }
            if(val==5){
                this.showimgae5=true
            }
            if(val==6){
                this.showimgae6=true
            }
            if(val==7){
                this.showimgae7=true
            }
        },
        noshowimg(val){
            if(val==1){
                this.showimgae1=false
            }
            if(val==2){
                this.showimgae2=false
            }
            if(val==3){
                this.showimgae3=false
            }
            if(val==4){
                this.showimgae4=false
            }
            if(val==5){
                this.showimgae5=false
            }
            if(val==6){
                this.showimgae6=false
            }
            if(val==7){
                this.showimgae7=false
            }
        }
    }
}
</script>

<style lang="less">
    .m-gamehover{
        display: flex;
        flex-direction: row;
        width: 466px;
        height: 250px;
        background: white;
        z-index: 50;
        box-shadow:  1px 1px 5px #888888;
        padding: 12px 0 0 12px;
        box-sizing:border-box;
        .gamepic{
            display: flex;
            flex-direction: column;
            height: 244px;
            width: 252px;
            // padding: 12px 0 0 12px;
            .gameimg{
                height: 128px;
                width: 240px;
                border-radius: 5px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .gameimgs{
                height: 110px;
                width: 240px;
                .gameul{
                    height: 110px;
                    width: 240px;
                    .gameli{
                        padding: 6px 0;
                        height: 110px;
                        width: 80px;
                        float: left;
                        box-sizing: border-box;
                        .gamea{  
                            display: flex;
                            flex-direction: column;
                            height: 98px;
                            width: 80px;
                            color: black;
                            padding: 6px 8px;
                            box-sizing: border-box;
                            img{
                                height: 64px;
                                width: 64px;
                                margin: auto;
                            }
                            span{
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
        .gamelist{
            box-sizing: border-box;
            width: 200px;
            height: 232px;
            padding-left: 6px;
            display: flex;
            flex-direction: column;
            .listtitle{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 26px;
                width: 194px;
                margin-bottom: 10px;   
                .listlogo{
                }
                .gametell{
                    a{
                        display: block;
                        height: 26px;
                        line-height: 26px;
                        color: #00a1d6;
                    }
                    
                }
            }
            .lists{
                
                ul{
                    li{
                        box-sizing: border-box;
                        width: 178px;
                        height: 28px;
                        padding-left: 16px;
                        a{
                            display: block;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                            line-height: 28px;
                            color: black;
                        }
                        .listsimg{
                            position: absolute;
                            top:26px;
                            right: -210px;

                        }
                    }
                }
            }
        }
    }
</style>

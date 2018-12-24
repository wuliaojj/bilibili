<template>
    <div class="m-videolist">
        <a href="">
            <img src="../assets/images/cont/main_pic.jpg" alt="">
            <span class="title">【FGO】轮到两仪式来给你洗脑了</span>
            <!-- <span class="caterage"></span> -->
            <span class="hovermask">
                
            </span>
            <img class="liveimg" src="../assets/images/cont/live_headImg1.jpg" alt="">
            <span class="liveicon">live</span>
            <div class="desc">
                <span><i class="usericon"></i>菱花</span>
                <span><i class="watchnum"></i>6782</span>
            </div>
        </a>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
    return {

    }
    },
    components: {

    }
}
</script>

<style lang="less">
.m-videolist{
    width: 160px;
    height: 148px;
    >a{
        position: relative;
        width: 100%;
        height: 100%;
        >img{
            width: 160px;
            height: 90px;
            border-radius: 4px;
        }
        .title{
            display: block;
            margin-top: 10px;
            padding-top: 8px;
            width: 160px;
            overflow: hidden;
            height: 28px;
            box-sizing: border-box;
            line-height: 20px;
        }
        .hovermask{
            position: absolute;
            top: 0;
            display: none;
            background: black;
            opacity: 0.4;
            width: 160px;
            height: 100px;
            border-radius: 4px;
        }
        .liveimg{
            display: none;
            position: absolute;
            left: 24px;
            top: 26px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
        .liveicon{
            display: none;
            position: absolute;
            right: 24px;
            top: 40px;
            width: 32px;
            height: 20px;
            padding-left: 16px;
            line-height: 20px;
            border-radius: 20px;
            color: #fff;
            background-color: #00a1d6;
            z-index: 10
        }
        .desc{
            display: flex;
            justify-content: space-between;
            height: 14px;
            overflow: hidden;
            .usericon{
                display: inline-block;
                width: 12px;
                height: 12px;
                margin-right: 4px;
                vertical-align: top;
                background-image: url(../assets/images/page_icons.png);
                background-repeat: no-repeat;
                background-position: -282px -154px;
            }
            .watchnum{
                display: inline-block;
                width: 12px;
                height: 12px;
                margin-right: 4px;
                vertical-align: top;
                background: url(../assets/images/live_online.png) no-repeat;
            }
        }
        &:hover{
            .title{
                height: 48px;
                transition: height 0.6s;
            }
            .hovermask,.liveimg,.liveicon{
                display: block;
            }
            .desc{
                height: 0px;
                transition: height 0.6s;
            }
        }
    }
}
</style>

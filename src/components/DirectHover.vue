<template>
    <div class="g-direct">
        <div class="g-directleft">
            <div class="lefttitle">热门直播:</div>
            <ul class="leftcontent">
                <li>
                    <a href="">
                        <img src="../assets/images/cont/live-box__img2.jpg" alt="">
                        <i>LIVE</i>
                        <span>热爱电竞的少年</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/images/cont/live-box__img3.jpg" alt="">
                        <i>LIVE</i>
                        <span>热爱电竞的少年</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/images/cont/live-box__img4.gif" alt="">
                        <i>LIVE</i>
                        <span>热爱电竞的少年</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/images/cont/live-box__img2.jpg" alt="">
                        <i>LIVE</i>
                        <span>热爱电竞的少年</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/images/cont/live-box__img6.jpg" alt="">
                        <i>LIVE</i>
                        <span>热爱电竞的少年</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/images/cont/live-box__img3.jpg" alt="">
                        <i>LIVE</i>
                        <span>热爱电竞的少年</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="g-directright">
            <div class="righttitle">热门直播:</div>
        </div>
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
.g-direct{
    display: flex;
    flex-direction: row;
    width: 466px;
    height: 260px;
    background: white;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 0 0 4px 4px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
    .g-directleft{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 220px;
        width: 255px;
        >.lefttitle{
            line-height: 16px;
            font-size: 14px;
            color: #ea759f;
        }
        >.leftcontent{
            border-right: 1px solid #eaeaea;
            margin-top: 5px;
            width: 254px;
            height: 188px;
            box-sizing: border-box;
            padding-top: 10px;
            li{
                width: 64px;
                height: 85px;
                float: left;
                box-sizing: border-box;
                margin-bottom: 4px;
                margin-right: 20px;
                a{
                    position: relative;
                    display: block;
                    width: 64px;
                    height: 85px;
                    img{
                        height: 64px;
                        width: 64px;    
                        border-radius: 100%;
                        margin-bottom: 7px;
                    }
                    i{
                        position: absolute;
                        display: block;
                        left: 0;
                        top: 0;
                        width: 64px;
                        height: 64px;
                        line-height: 64px;
                        border-radius: 50%;
                        color: #fff;
                        background: rgba(0,0,0,.5);
                        font-size: 15px;
                        font-weight: 700;
                        transform: scale(0);
                        transition: transform .2s;
                        text-align: center;
                    }
                    span{
                        display: block;
                        width: 100%;
                        line-height: 14px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        font-size: 12px;
                        text-align: center;
                    }
                    &:hover{
                        i{
                            position: absolute;
                            display: block;
                            left: 0;
                            top: 0;
                            width: 64px;
                            height: 64px;
                            line-height: 64px;
                            border-radius: 50%;
                            color: #fff;
                            background: rgba(0,0,0,.5);
                            font-size: 15px;
                            font-weight: 700;
                            transform: scale(1);
                            transition: transform .2s;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
    .g-directright{
        .righttitle{
            line-height: 16px;
            font-size: 14px;
            color: #ea759f;
        }
    }
}
</style>

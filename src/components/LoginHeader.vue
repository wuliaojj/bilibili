<template>
    <div class="g-loginheader">
        <div class="g-headerwrap">
            <div class="f-fl headertop">
                <ul class="headertopul">
                    <li class="homelogo headerli"><a class="headera">主站</a></li>
                    <li class="headerli"><a class="headera">画友</a></li>
                    <li class="headerli">
                        <a class="headera" @mousemove="showGame()" @mouseout="noshowGame()">游戏中心</a>
                        <div @mousemove="showGame()" @mouseout="noshowGame()"  v-show="showgames">
                            <game-hover @mousemove="showGame1()" @mouseout="noshowGame()" style="position: absolute"></game-hover>
                        </div>
                    </li>
                    <li class="headerli">
                        <a class="headera" @mousemove="showDirect()" @mouseout="noshowDirect()">直播</a>
                        <div @mousemove="showDirect()" @mouseout="noshowDirect()" v-show="showdirects">
                            <direct-hover style="position: absolute"></direct-hover>
                        </div>
                        </li>
                    <li class="headerli"><a class="headera">周边</a></li>
                    <li class="headerli"><a class="headera">移动端</a></li>
                </ul>
                <div class=""></div>
            </div>
            <div class="f-fr logintop">
                <div class="login">
                    <a>登录</a>
                    <span>|</span>
                    <a>注册</a>
                </div>
                <div class="post">
                    <a class="posta" @mousemove="showPost()" @mouseout="noshowPost()">投稿</a>
                    <div class="postcontent" v-show="showposts" @mousemove="showPost()" @mouseout="noshowPost()">
                        <a class="postvideo" href="">
                            <span>视频投稿</span>
                        </a>
                        <a class="postadmin" href="">
                            <span>投稿管理</span>
                        </a>
                        <a class="postcenter" href="">
                            <span>创作中心</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import GameHover from '../components/GameHover.vue';
import DirectHover from '../components/DirectHover.vue';
export default {
    data() {
    return {
        showgames:false,
        showdirects:false,
        showposts:false
    }
    },
    components: {
        GameHover,
        DirectHover
    },
    methods:{
        showGame(){
            this.showgames=true
        },
        noshowGame(){
            this.showgames=false
        },
        showDirect(){
            this.showdirects=true
        },
        noshowDirect(){
            this.showdirects=false
        },
        showPost(){
            this.showposts=true
        },
        noshowPost(){
            this.showposts=false
        }
    }
}
</script>

<style lang="less">
.g-loginheader{
    position: relative;
    top: 0;
    width: 100%;
    height: 42px;
    background: rgba(0, 0, 0, .4);
    z-index: 2
}
.g-headerwrap{
    width: 980px;
    height: 100%;
    margin: 0 auto;
    >.headertop{
        height: 100%;
        .headertopul{
            height: 100%;
            li{
                display: inline-block;
                height: 100%;
                float: left;
                a{
                    height: 42px;
                    width: 50px;
                    line-height: 42px;
                    text-align: center;
                    color: #fff;
                    font-size: 12px;
                    &:hover{
                        background-color: rgba(255, 255, 255, .2);
                    }
                }
            }
            .homelogo{
                background: url(../assets/images/page_icons.png) no-repeat -845px -74px;
                a{
                    padding: 0 0 0 20px;
                }
            }
        }
    }
    >.logintop{
        display: flex;
        flex-direction: row;
        height: 42px;
        line-height: 42px;
        .login{
            display: flex;
            flex-direction: row;
            >span{
                color: #fff;
            }
            >a{
                height: 42px;
                width: 44px;
                line-height: 42px;
                text-align: center;
                // padding: 0 0 0 20px;
                color: #fff;
                font-size: 12px;
                &:hover{
                    background-color: rgba(255, 255, 255, .2);
                }
        }
        }
        .post{
            position: relative; 
            .posta{
                // position: relative;
                height: 48px;
                width: 58px;
                line-height: 42px;
                text-align: center;
                // padding: 0 0 0 20px;
                color: #fff;
                font-size: 12px;
                background: rgba(223, 86, 113);
                border-radius:0 0 10px 10px;
            }
            .postcontent{
                position: absolute;
                display: flex;
                flex-wrap: wrap;
                width: 216px;
                height: 64px;
                top: 42px;
                right:0;
                background: white;
                .postvideo{
                    width: 72px;
                    height: 64px;
                    display: inline-block;
                    font-size: 12px;
                    color: rgba(223, 86, 113);
                    background: url(../assets/images/page_icons.png) no-repeat;
                    background-position: -444px -905px;
                    text-align: center;
                    line-height: 98px;
                }
                .postadmin{
                    width: 72px;
                    height: 64px;
                    display: inline-block;
                    font-size: 12px;
                    color: rgba(223, 86, 113);
                    background: url(../assets/images/page_icons.png) no-repeat;
                    background-position: -444px -967px;
                    text-align: center;
                    line-height: 98px;
                }
                .postcenter{
                    width: 72px;
                    height: 64px;
                    display: inline-block;
                    font-size: 12px;
                    color: rgba(223, 86, 113);
                    background: url(../assets/images/page_icons.png) no-repeat;
                    background-position: -444px -1736px;
                    text-align: center;
                    line-height: 98px;
                }
            }
        }
    }
} 

</style>

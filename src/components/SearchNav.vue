<template>
    <div class="g-searchbar">
        <div class="g-searchwrap">
            <div class="g-search">
                <div class="m-seacrh">
                    <div class="rank">排行榜</div>
                    <div class="search">
                        <input type="text" name="" id="" class="searchinp" placeholder="search here">
                        <a class="find"></a>
                    </div>
                </div>
            </div>
            
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
.g-searchbar{
    // position: absolute;
    // top: -42px;
    width: 100%;
    height: 200px;
    background: url(../assets/images/header_bg.jpg) no-repeat center -10px;
    // z-index: 10;
    .g-searchwrap{
        width: 980px;
        height: 200px;
        margin: 0 auto;
        position: relative;
        .g-search{
            position: absolute;
            bottom: 54px;
            right: 0;
            border-color: rgba(0,0,0,0.12);
        }
    }
}


.m-seacrh{
    display: flex;
    flex-direction: row;
    height: 32px;
    width: 338px;
    // background: red;
    .rank{
        background: white;
        border-radius: 5px;
        padding: 0 4px;
        margin-right: 2px; 
        text-align: center;
        line-height: 32px;
        color: #f25d8e;
        padding-left:26px; 
        background-image: url(../assets/images/page_icons.png);
        background-repeat: no-repeat;
        background-position: -659px -655px;
    }
    .search{
        display: flex;
        flex-direction: row;
        background: white;
        opacity: 0.8;
        width: 268px;
        height: 100%;
        border-radius: 5px;
        .searchinp{
            padding:0 0 0 12px;
            height: 100%;
            width: 220px;
        }
        .find{
            display: block;
            width: 36px;
            height: 32px;
            margin-top: 8px;
            background: url(../assets/images/page_icons.png) no-repeat -663px -728px;
        }
        
    }
}
</style>

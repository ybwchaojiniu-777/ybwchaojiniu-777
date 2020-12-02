<template>
    <div id="main">
        <Header title="神影影院"></Header>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/CiList" class="city_name">
                    <span>全城</span><i class="fa fa-caret-down"></i>
                </router-link>
                <router-link tag="div" to="/CiList" class="city_name2">
                    <span>品牌</span><i class="fa fa-caret-down"></i>
                </router-link>
                <router-link tag="div" to="/CiList" class="city_name3">
                    <span>特色</span><i class="fa fa-caret-down"></i>
                </router-link>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import TabBar from '../components/TabBar.vue'
export default {
    name:'Movie',
    components:{
        Header,
        TabBar
    }
}
</script>
<style scoped>
    #content .movie_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
    }
    .movie_menu .city_name{
        margin-left: 80px;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .city_name2{
        
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .city_name3{
        float: right;
        margin-right: 80px;
        height: 100%;
        line-height: 45px;
    }

</style>
<template>
    <div id="footer">
        <ul>
            <router-link tag="li" to="/Now">
                <i class="fa fa-film"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/CiList">
                <i class="fa fa-youtube-square"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/Login">
                <i class="fa fa-user-circle"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Tabbar"
}
</script>
<style scoped>
    
    #footer{
        width: 100%;
        height: 60px;
        background: white;
        border-top: 2px solid #ebe8e3;
        margin-top: 20px;
        position: fixed;
        left: 0;
        bottom: 0px;

    }
    #footer ul{
        display: flex;
        text-align: center;
        height: 90px;
        align-items: center;
        list-style: none;
        margin-top: -20px;
        margin-left: -20px;
    }
    #footer ul li{
        flex: 1;
        height: 40px;
    }

    #footer li.active{
        color: #f03d37;
    }
    #footer li.router-link-active{
        color: #f03d37;
    }
    #footer ul i{
        font-size: 20px;
    }
    #footer ul p{
        font-size: 12px;
        line-height: 18px;
    }
</style>
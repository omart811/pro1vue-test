<template>
<div class="index-wrap">
        <div v-for="product in productList">
            <h2>全部产品</h2>
            <h3>{{product.category}}</h3>
            <ul>
                <li v-for = "item in product.list">
                    <a href="item.url">{{item.name}}</a> 
                </li>
            </ul>
        </div>
        <div class="index-left-block">
            <h2>最新消息</h2>
            <router-link to="/details">链接到的位置</router-link>
            <template>
                <swiper :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide><img src="../assets/j1.png" alt=""></swiper-slide></swiper-slide>
                    <swiper-slide><img src="../assets/j2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/j3.png" alt=""></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </template>
        </div>
</div>
   
  
</template>
<script>
export default {
    name:"layout",
    data(){
        return{
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
                loop:true,
                navigation:{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
             },   
            news:[],
            productList:[{
                category:"手机应用类",
                list:[
                    {
                        name:"第一个助手",
                        url:"http://www.baidu.com"
                    },
                    {
                        name:"第二个助手",
                        url:"http://www.baidu.com"
                    },
                    {
                        name:"第三个助手",
                        url:"http://www.baidu.com"
                    }
                    ]
                },
                {
                category:"其他应用类",
                list:[
                    {
                        name:"第一个其他",
                        url:"http://www.baidu.com"
                    },
                    {
                        name:"第二个其他",
                        url:"http://www.baidu.com"
                    },
                    {
                        name:"第三个其他",
                        url:"http://www.baidu.com"
                    }
                    ]

                }

            ]
        }
    },
    created(){
        this.$axios.get("http://wwtliu.com/sxtstu/news/juhenews.php",{
            params:{
                count:10,
                type:"top",
            }
        })
        .then(res => {
            this.news = res.data.result.data
            // console.log(res.data.result.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
</script>
<style scoped>

</style>



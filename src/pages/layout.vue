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
            <ul>
                <li v-for = "items in news"> 
                     {{items.title}}
                    
                </li>
            </ul>
        </div>
</div>
   
  
</template>
<script>
export default {
    name:"layout",
    data(){
        return{
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
            console.log(res.data.result.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
</script>
<style scoped>

</style>



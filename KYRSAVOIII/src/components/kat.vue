<template>
    <div>
        <div class="container" style="height: 90px">
            <div class="row">
                <div class="col-md-12 block" style="padding: 0%">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-3" style=" padding: 0%">
                                <router-link to="/">
                                <img src="../assets/img/logo.gif" width="100%" style="padding: 10px">
                                </router-link>
                            </div>
                            <div class="col-sm-6"></div>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-1" style="background: #F4716A;height:90px">
                                <img src="../assets/img/icons/icons8-пользователь-без-половых-признаков-filled-50.png" id="enter">
                                <span id="enterName">Вход</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 block3">
                    <div class="input-wrapper" data-text="">

                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 block2" style="padding: 0%">
                    <div class="rep" style="">
                        <div class="container-fluid" id="blockImg ">
                            <div class="row">
                                <div class="nameKat">{{name}}</div>
                                <div  v-for="(item,index) in filteredItems" class="col-md-3 pad11 " v-bind:key="index">
                                    <router-link v-bind:to="/rep/+item._id">
                                        <div class="kartinka">

                                            <img v-bind:src="item.img" width="100%" height="100%" >
                                        </div>
                                        <!--<img :src="rep[0].img" width="100%" height="100%" />-->
                                        <div class="white">
                                            {{item.op}}
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <b-pagination align="center" class="btn btn-danger" v-for="p in pagination.pages" @click.prevent="setPage(p)" v-bind:key="p._id">
                            {{p}}
                        </b-pagination>
                        <!--<div class="container-fluid" id="blockImg ">-->
                            <!--<div class="row">-->

                                <!--<div  v-for="(item,index) in filteredItems" class="col-md-4 pad1 " v-bind:key="index">-->
                                    <!--<router-link v-bind:to="/rep/+item._id">-->
                                        <!--<div class="kartinka">-->

                                            <!--<img v-bind:src="item.img" width="100%" height="100%" >-->
                                        <!--</div>-->
                                        <!--&lt;!&ndash;<img :src="rep[0].img" width="100%" height="100%" />&ndash;&gt;-->
                                        <!--<div class="white">-->
                                            <!--{{item.op}}-->
                                        <!--</div>-->
                                    <!--</router-link>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<b-pagination align="center" class="btn btn-danger" v-for="p in pagination.pages" @click.prevent="setPage(p)" v-bind:key="p._id">-->
                            <!--{{p}}-->
                        <!--</b-pagination>-->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import lodash from 'lodash'

    Vue.use(VueAxios, axios,lodash)
    export default {
        name: "kat",
        props:{
            name:'',
        },
        data: function () {
            return {
                // rep:[
                //     {_id:1,img: "../assets/img/1.jpg", op: 'Запеченный грейпфрут',ing:["Грейпфрут...1 шт.","Мёд...1 ч. л.","Корица...по вкусу"],info:"Печеные яблоки — десерт, понятный и привычный для нашего человека. А как насчет грейпфрута, запеченного с мёдом и специями? Не спешите возмущаться и называть это необычное блюдо кощунством. Один раз попробовав, вы влюбитесь в него без памяти! Чарующий аромат, нежная мякоть, лишенная горечи, и всего 34 калорий на 100 грамм! Запеченный с корицей грейпфрут станет прекрасным заменителем обычных десертов для армии худеющих и вдохновит на новые творческие эксперименты.",
                //         cocking:["Подготовьте грейпфрут. Для этого срежьте немного кожуры на верхушке и внизу для устойчивости. Разрежьте фрукт на 2 равные части.","Аккуратно отделите острым ножом от мякоти кожуру и пленочки. При этом постарайтесь не повредить кожицу, чтобы при запекании не вытек сок.","Застелите противень пергаментом и выложите половинки грейпфрута. При желании смажьте мякоть растительным маслом и посыпьте корицей. Запекайте 5–7 минут при 180 градусах.","Готовый фрукт полейте мёдом. Перед подачей можно посыпать измельченными фисташками, миндалем или мятой."],
                //         kat:"Десерты",comp:"Легко",por:"Порций: 2"},
                //     {_id:2,img: "../assets/img/2.jpg", op: 'Гренки на сковороде',kat:"Салат"},
                //     {_id:3,img: "../assets/img/3.jpg", op: 'Курица, запеченная с капустой',kat:"Десерты"},
                //     {_id:4,img: "../assets/img/4.jpg", op: 'Курица, запеченная с капустой',kat:"Десерты"},
                //     {_id:5,img: "../assets/img/5.jpg", op: 'Люля-кебаб «Дедушкины усы»'},
                //     {_id:6,img: "../assets/img/6.jpg", op: 'Запеканка из брокколи с сыром и грибами'},
                //     {_id:7,img: "../assets/img/7.jpg", op: 'Домашний «Сникерс»'},
                //     {_id:8,img: "../assets/img/8.jpg", op: 'Печенье «Американер»'},
                //     {_id:10,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:11,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:12,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:13,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:14,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:15,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:16,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:17,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:18,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:19,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:20,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:21,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:22,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:23,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:24,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:25,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:26,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:27,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:28,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:29,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:30,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:31,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:32,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:33,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:34,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:35,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:36,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:37,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:38,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:39,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:40,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:41,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:42,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:43,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:44,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:45,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:46,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:47,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:48,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:49,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //     {_id:50,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                //
                //
                // ],
                rep:[],
                search: [],
                float: 'left',
                perPage: 9,
                pagination:[],
                poch:[],
                pep:[],
                lil:[],
                nam:[]
            }

        },
        mounted: function () {
            Vue.axios.get("http://127.0.0.1:3000/tasks").then((response) => {
                this.rep = response.data;

            })
        },
        computed:{
            filteredItems:function () {
                return this.rep.filter(element=>{
                    return(element.kat == this.name);
                })


            }}
    }

</script>

<style>
    @font-face {
        font-family: Roboto; /* Имя шрифта */
        src: url('../assets/fonts/Roboto.ttf'); /* Путь к файлу со шрифтом */
    }
.pad11{
    height: 350px;
    padding-right: 0.5%;
    padding-left: 0%;
}
    .nameKat{
        width: 100%;
        font: 700 30px Roboto;
        margin: 0;
        color: #fff;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color:#ff7b74;
        margin-bottom: 1.5%;
    }
</style>
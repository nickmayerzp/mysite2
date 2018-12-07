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
                <div class="col-xs-12 col-lg-8 block2" style="padding: 0%">
                    <div class="container-fluid" style="padding: 0%">
                        <div clas="row">
                            <div id="titl">{{rep.op}}</div>
                        </div>
                    </div>
                    <div class="rep">
                        <div class="container-fluid" id="blockImg ">
                            <div class="row">
                                <div class="col-md-12" style="height: 100%; background-color:#fff; padding: 0%">
                                    <img v-bind:src="rep.img"style="float: left;padding-left: 10px;padding-top: 10px">
                                    <div style="float: left;padding-left: 10px" class="ing">

                                        <h3 style="padding-left: 10px">Ингридиенты</h3>
                                        <ol class="pills">
                                            <li v-for="(item,index) in rep.ing" v-bind:key="index">
                                                {{item}}
                                            </li>
                                        </ol>
                                    </div>
                                    <div style="clear: left;">
                                        <br /> <hr />
                                    </div>
                                    <div>
                                    <img src="../assets/img/icons/icons8-столовая-50.png">{{rep.kat}}
                                    <img src="../assets/img/icons/icons8-скорость-50.png">{{rep.comp}}
                                    <img src="../assets/img/icons/icons8-групповой-звонок-filled-50.png">{{rep.por}}
                                    </div>
                                    <div style="clear: left;">
                                     <hr />
                                    </div>
                                    <div style="clear: left; padding-top: 10px;padding-left: 10px;padding-right: 10px" class="info">{{rep.info}}</div>
                                    <br /> <hr />
                                    <h1 style="clear: left; padding-top: 10px">Приготовление</h1>
                                    <ol class="bullet">
                                        <li v-for="(item,index) in rep.cocking" v-bind:key="index" style="text-align: left;padding-left: 10.200px;border-top-width: 3px;width: 736.4px;padding-left: 20.200px;padding-left: 20.200px;margin-left: 12px;">
                                            {{item}}
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-12" style="height: 300px; background-color:#fff; padding: 0%; margin-top: 20px">
                                    <h3 style="clear: left; padding-top: 10px;text-align: left; padding-left: 20px">Оставить комментарий</h3>
                                    <br />
                                    <textarea id="comment"  rows="7" cols="70" v-model="commentt"></textarea><br />
                                    <button v-on:click="chh(rep)"type="button" class="but btn " value="ok" style="width: 100px;margin-top: 20px;margin-left: 42%">OK</button>

                                </div>
                                <div class="col-md-12" style="height: 100%; background-color:#fff; padding: 0%; margin-top: 20px">
                                    <h3 style="clear: left; padding-top: 10px;text-align: left; padding-left: 20px">Коментарии</h3>
                                    <br />
                                    <ul class="list2a">
                                        <li v-for="(item,index) in filteredItems" v-bind:key="index" style="text-align: left;padding-left: 10.200px;border-top-width: 3px;width: 736.4px;padding-left: 20.200px;padding-left: 20.200px;margin-left: 12px;">
                                            {{item}}
                                        </li>
                                    </ul>
                                </div>
<div>

</div>
                                <div style="height: 20px;width: 100%; margin-top: 20px">

                                </div>
                            </div>
                        </div>
                        <b-pagination align="center" class="btn btn-danger" v-for="p in pagination.pages" v-on:click.prevent = "setPage(p,rep.commentt.length)" v-bind:key="p._id" style="">
                            {{p}}
                        </b-pagination>
                    </div>
                </div>

                <div class="col-xs-12 col-lg-4 block2" style="padding-right: 0%">
                    <div class="cat">
                        <div class="name">Категории рецептов</div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 vis1 vis">
                                    <router-link v-bind:to="/kat/+'Мясо'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-стейк-50.png" class="span">
                                            <span>Мясо</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis2 vis">
                                    <router-link v-bind:to="/kat/+'Закуски'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-гамбургер-50.png" class="span">
                                            <span>Закуски</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis3 vis">
                                    <router-link v-bind:to="/kat/+'Гарниры'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-еда-50.png" class="span">
                                            <span>Гарниры</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 vis2 vis">
                                    <router-link v-bind:to="/kat/+'Выпечка'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-круассан-50.png" class="span">
                                            <span>Выпечка</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis3 vis">
                                    <router-link v-bind:to="/kat/+'Десерты'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-кондитерские-изделия-50.png" class="span">
                                            <span>Десерты</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis1 vis">
                                    <router-link v-bind:to="/kat/+'Гриль'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-кебаб-50.png" class="span">
                                            <span>Гриль</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 vis3 vis">
                                    <router-link v-bind:to="/kat/+'Рыба'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-целая-рыба-50.png" class="span">
                                            <span>Рыба</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis1 vis">
                                    <router-link v-bind:to="/kat/+'Напитки'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-бар-50.png" class="span">
                                            <span>Напитки</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis2 vis">
                                    <router-link v-bind:to="/kat/+'Салат'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-салат-50.png" class="span">
                                            <span>Салат</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 vis1 vis">
                                    <router-link v-bind:to="/kat/+'Завтрак'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-блины-50.png" class="span">
                                            <span>Завтрак</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis2 vis">
                                    <router-link v-bind:to="/kat/+'Торт'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-торт-ко-дню-рождения-50.png" class="span">
                                            <span>Торты</span>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-4 vis3 vis">
                                    <router-link v-bind:to="/kat/+'Супы'">
                                        <div class="ico">
                                            <img src="../assets/img/icons/icons8-черпак-50.png" class="span">
                                            <span>Супы</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
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
        name:'repInfo',
        props:{
            id:'',
        },
        data: function () {
            return {
                rep:[],
                search: [],
                float: 'left',
                perPage: 5,
                pagination:[],
                poch:[],
                pep:[],
                lil:[],
                commentt:[],
                tt:[],
                lang:[],
                test:[]


            };

        },
        mounted: function () {
            var i =this.id;
             var u = this.pep;
             var l = this.lil;
            Vue.axios.get("http://localhost:3000/tasks").then((response) => {
                response.data.find((element) =>{
                    this.rep = response.data.find((element) =>{
                        this.tt=element.commentt;
                        // this.setPage(1,this.lang);
                        return i == element._id;
                    })
                })

            })
            // var i =this.id;
            // var u = this.pep;
            //      this.rep.forEach(function (element) {
            //          if(element._id == i){
            //              u.push(element);
            //          }
            //     })




           // return this.pep = this.rep.filter((element)=>{
           //     return this.id === element._id;
           // });

           // return this.pep function () {
           //     return this.rep.find(function (element) {
           //         return this.id === element._id;
           //     })
           // }


        },
        /* mounted: function () {
             this.students = students;
         },*/
        methods:{
            leng(item){
                this.lang = item.commentt.length;
            },
            number(){
                return this.lang;
            },
            setPage(p,i){

                this.pagination=this.paginator(i,p);
            },
            paginate(rep){
                return _.slice(rep,this.pagination.startIndex, this.pagination.endIndex +1)
            },
            paginator(totalItems,currentPage){
                var startIndex=(currentPage-1)*this.perPage,
                    endIndex=Math.min(startIndex + this.perPage-1,totalItems - 1);
                return {
                    currentPage:currentPage,
                    startIndex:startIndex,
                    endIndex:endIndex,
                    pages: _.range(1,Math.ceil(totalItems / this.perPage) + 1)
                };
            },
            addComent(){
                this.lil.com.push(this.coment);
            },
            // chh: function (item) {
            //     Vue.axios.put("http://127.0.0.1:3000/tasks/"+ item._id, {
            //         comment: item.comment[0]
            //     }).then((response) => {
            //             response.data.find((element) =>{
            //                 if(element._id == this.id){
            //                     this.pep.push(element);
            //                 }
            //             })
            // },}
            // add: function () {
            //     Vue.axios.get("http://127.0.0.1:3000/tasks/"+this.lil[0]._id).then((response) => {
            //         response.data.commentt.push(this.commentt);
            //     })
            // },
            // chh: function (item) {
            //     Vue.axios.put("http://localhost:3000/tasks/"+ item._id,
            //         {
            //             commentt: item.commentt,
            //         }
            //     ).then((response) => {
            //
            //     })
            // },
            add: function (item) {
                Vue.axios.post("http://localhost:3000/tasks/"+item._id, {
                    commentt:Array.prototype.push(this.commentt)
                }).then((response) => {
                    this.rep = response.data;
                })

            },
            chh: function (item) {
                if(this.commentt==""){alert("Введите что-то в коментарий");}else {
                    this.tt.push(this.commentt);
                    Vue.axios.put("http://localhost:3000/tasks/" + item._id, {
                        commentt: this.tt
                    }).then((response) => {
                        this.rep = response.data;
                    })
                }
            },

        },
        created(){
              this.setPage(1,6);

        },
        computed:{

            collection(){
                return this.paginate(this.rep);
            },

            filteredItems:function () {

                /**
                 * @var string search
                 * @var array string elements
                 * @return array strung elementsToSearch
                 *
                 * function () {
                 *
                 * }
                 */
                    return this.paginate(this.rep.commentt);


            }}
    };
</script>

<style>
    @font-face {
        font-family: Roboto; /* Имя шрифта */
        src: url('../assets/fonts/Roboto.ttf'); /* Путь к файлу со шрифтом */
    }
    .ing{
        font: bold 20px Roboto;
        text-align: left;
    }
    .basic{
        background: url('../assets/img/image-mask.png');

        text-align: center;
    }
    .older {
        list-style: none;
        margin: 0 auto;
        width: 660px;
        counter-reset: li;
        padding: 0px;
    }
    .older li {
        border-bottom: dashed 1px #006699;
        margin-top: 10px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        padding: 5px;
    }
    .older a {
        text-decoration: none;
        padding: 10px;
        display: block;
        line-height: 30px;
        color: #3A3A3A;
        font-family: Roboto, serif;
        font-size: 20px;
    }
    .older a:before {
        display: inline-block;
        content: counter(li);
        counter-increment: li;
        height: 30px;
        width: 30px;
        text-align: center;
        border: solid 1px #dedede;
        margin-right: 20px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
        font-family: Roboto, cursive;
        font-size: 24px;
        -webkit-transition: .4s linear;
        transition: .4s linear;
    }
    .older a:hover:before {
        color:#D72F2C;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    .dbl-border {
        list-style: none;
        margin: 0;
    }
    .dbl-border li {
        margin: 10px 0;
        position: relative;
    }
    .dbl-border a {
        width: 100%;
        color: #808285;
        text-decoration: none;
        border-left: 6px solid #ABC7EA;
        display: block;
        padding-left: 25px;
        height: 44px;
        line-height: 44px;
        font-size: 20px;
        position: relative;
        transition: 0.3s linear;
    }
    .dbl-border a:before {
        content: "";
        width: 6px;
        height: 70%;
        background: #EE997C;
        position: absolute;
        top: 15%;
        left: -12px;
    }
    .dbl-border li:before {
        content: "";
        width: 6px;
        height: 40%;
        background: #EFDD89;
        position: absolute;
        top: 30%;
        left: -12px;
    }
    .dbl-border a:hover {background: #D4D8D9;}
    .bullet {
        margin-left: 0;
        list-style: none;
        counter-reset: li;
        padding: 0%;
    }
    .bullet li {
        position: relative;
        margin-bottom: 1.5em;
        border: 3px solid #CADFCF;
        padding: 0.6em;
        border-radius: 4px;
        background: #FEFEFE;
        color: #231F20;
        font-family: Roboto;
    }
    .bullet li:before {
        position: absolute;
        top: -0.7em;
        padding-left: 0.4em;
        padding-right: 0.4em;
        font-size: 16px;
        font-weight: bold;
        color: #DCC24B;
        background: #FEFEFE;
        border-radius: 50%;
        counter-increment: li;
        content: counter(li);
    }
    .beads {
        list-style: none;
        background: #EEE3DB;
        margin: 0;
        padding-left: 40px;
        border-radius: 5px;
    }
    .beads li {
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        line-height: 40px;
        border-bottom: 1px solid #D4D7D6;
        position: relative;
    }
    .beads a {
        text-decoration: none;
        color: #464643;
        display: block;
        line-height: 40px;
        position: relative;
    }
    .beads a:before {
        content:"";
        position: absolute;
        left: -20px;
        top: 6px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #A58063;
    }
    .beads li:last-child {border-bottom: none;}
    .beads li:before,
    .beads li:after {
        content:"";
        position: absolute;
        border-radius: 50%;
    }
    .beads li:before {
        top: calc(50% - 5px);
        background: #E0926E;
        left: -22px;
        width: 10px;
        height: 10px;
        transition: 0.5s linear;
    }
    .beads li:after {
        bottom: 6px;
        left: -20px;
        width: 6px;
        height: 6px;
        background: #A58063;
    }
    .beads li:hover:before {background: #FFCE08;}
    .pills {
        margin-left: 0;
        list-style: none;
        counter-reset: li;
        font-family: calibri;
        padding: 0%;
    }
    .pills li {
        padding-bottom: 5px;
        position: relative;
        left: 1.5em;
        margin-bottom: 0.2em;
        padding-left: 1em;
        background: #E3DEDC;


    }
    .pills li:before {
        padding: 2.5px 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -1.5em;
        width: 1.875em;
        text-align: center;
        color: white;
        font-weight: bold;
        background: #F4716A;
        border-bottom-left-radius: 70em;
        border-top-left-radius: 70em;
        counter-increment: li;
        content: counter(li);
    }
    .info{
        font:  19px Roboto;
    }
    .list4a {
        padding:0;
        list-style: none;
        counter-reset: li;
    }
    .list4a li {
        position: relative;
        padding:12px 20px 20px 28px;
        margin-left: 40px;
        transition-duration: 0.3s;
    }
    .list4a li:before {
        border: 6px solid transparent;
        line-height: 30px;
        position: absolute;
        top: 0;
        left:-30px;
        width:42px;
        text-align:center;
        font-size: 13px;
        font-weight: bold;
        color: #77AEDB;
        counter-increment: li;
        content: counter(li);
        transition-duration: 0.3s;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .list4a li:hover:before {
        color: #337AB7;
    }
    .list4a li:after {
        position: absolute;
        top: 0;
        left: -30px;
        width: 42px;
        height: 42px;
        border: 6px solid #3399FF;
        border-radius: 50%;
        content: '';
        opacity: 0.5;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .list4a li:hover:after {
        animation: 500ms ease-in-out 0s bounceIn;
        opacity: 1;
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
        20% {
            transform: scale3d(1.3, 1.3, 1.3);
        }
        40% {
            transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            transform: scale3d(.97, .97, .97);
        }
        to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }
    }
    .list2a {
        margin-bottom: 8px;
        padding:0;
        list-style: none;
        counter-reset: li;
    }
    .list2a li {
        position: relative;
        border: 2px solid #ff7b74;
        background: #faefec;
        padding:16px 20px 16px 28px;
        margin:12px 0 12px 40px;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }
    .list2a li:hover {
        background: #FFF;
    }
    .list2a li:before {
        line-height: 32px;
        position: absolute;
        top: 4px;
        left:-40px;
        width:40px;
        text-align:center;
        font-size: 16px;
        font-weight: bold;
        color: #FFF;
        background: #ff7b74;
        counter-increment: li;
        content: counter(li);
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
    }
    .list2a li:hover:before {
        width:46px;
    }
    .list2a li:after {
        position: absolute;
        left: 0;
        top: 4px;
        content: "";
        height: 0;
        width: 0;
        border: 16px solid transparent;
        border-left-color: #ff7b74;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s
    }
    .list2a li:hover:after {
        margin-left: 6px;
    }
</style>
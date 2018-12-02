import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import rep from './components/rep.vue'
import repInfo from './components/repInfo.vue'
import kat from './components/kat.vue'


const routes = [
    { path: '/', component: rep ,meta:{requiresAuth:true}},
    { path: '/rep/:id', component: repInfo ,props: true  },
    { path: '/kat/:name', component: kat ,props: true,meta:{requiresAuth:true}}]

const router = new VueRouter({
    routes
})



Vue.use(VueRouter)
new Vue({
    render: h => h(App),
    el: '#app',
    router
})




/*new Vue({
     el: '#appp',
     data: {
         students: [],
		 search:''
     },	 
     mounted: function(){
         Vue.axios.get("http://www.apilayer.net/api/live?access_key=bdb1289ef8ad2364fc710b79d15c6aec").then((response) => {
             this.students = response.data;
         })
     },
     methods: {
        clickme: function(id) {
            alert("Ok");
            this.students = this.students.filter((element) => {
                return element.id !== id;
            });
        }
     },
  
 });    */


<template>
  <div id="app">
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <h3 class="mt-5">Listeler</h3>
        <hr />
         <!-- <router-view></router-view> -->
        <!-- <button @click=fetchData></button> -->
        <div class="second-container">
          <Second
            @deleteSecond="deleteSecond($event, index)"
            @editSecond="editSecond($event)"
            @saveSecond="saveSecond($event)"
            v-for="(second, index) in secondList"
            v-bind:index="index"
            v-bind:second="second"
            :key="second.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Second from "@/components/Second";
//import Details from "@/components/Details";
//import axios from "axios"

export default {
  components: {
    Second,
    //Details,
  },
  data() {
    return {
      secondList: [],
    };
  },
  methods: {
    fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          return response.json();
        })
        .then((response) => {
          for (let key in response) {
            this.secondList.push(response[key]);
            console.log(response[key]);
          }
        });
    },
    deleteSecond(secondId) {
      //alert(secondId)
      console.log(secondId);
      fetch("https://jsonplaceholder.typicode.com/users/" + secondId.id, {
        method: "DELETE",
      })
        .then((response) => {
          console.log(this.secondList.indexOf(secondId));
          this.secondList.splice(this.secondList.indexOf(secondId), 1);

          console.log(response);
          this.$toast.info("Başarılıyla silinmiştir");
        })
        .catch((e) => {
          console.log(e);
        });

     // this.fetchData;
    },

    editSecond (obj) {
      
       console.log(obj);     

    },

    saveSecond(obj) {

      console.log(obj);

      fetch('https://jsonplaceholder.typicode.com/users/' + obj.id, {
      method: 'PUT',
      body: JSON.stringify({
      obj
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))

this.$emit('close');


    },
  },
  created: function () {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
//  #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>

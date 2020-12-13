<template>
  <div>
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <h3 class="mt-5">Listeler</h3>
        <hr />         
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
          <!-- <Home /> -->
         <!-- <Details v-for="(second, index) in secondList"
            v-bind:index="index"
            v-bind:second="second"
            :key="second.id" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Second from "./Second";
//import Details from "@/components/Details";
//import Home from "./components/Home.vue";
//import axios from "axios"

export default {
  components: {
    Second,
    //Details,
    //Home
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
            localStorage.setItem("secondList", JSON.stringify(this.secondList));
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

        localStorage.setItem("secondList", JSON.stringify(this.secondList));

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

  localStorage.setItem("secondList", JSON.stringify(this.secondList));

this.$emit('close');


    },
  },
  created: function () {
    this.fetchData();
     
  },
  

  //   mounted() {
  //     localStorage.setItem("secondList", JSON.stringify(this.secondList));

     
  //   // if (localStorage.name) {
  //   //   this.name = localStorage.name;
  //   //   console.log( "test test");
  //   // }
  // },
  // watch: {
  //   name(newName) {
  //     localStorage.name = newName;
  //     console.log( "test1 test1");
  //   }
  // }
};
</script>


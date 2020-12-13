<template>
  <div>
    <h1>{{users.name}}</h1>
    <ul>
     <span> <strong>Email: </strong> {{users.email}} </span> <br>
     <span> <strong>Phone: </strong> {{users.phone}} </span> <br>
     <span> <strong>Website: </strong> {{users.website}} </span> <br>
     <span> <strong>Company Name: </strong> {{ users.company.name }} </span> <br>
     <span> <strong>Address: </strong> {{ users.address.street }}</span>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      users: {}
    }
  },
  methods: {
    fetchData() {
      fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
        .then((res) => { return res.json() })
        .then((data) => { this.users = data; })
    },

  },
  watch: {
    '$route': 'fetchData'
  },

  created() {
    this.fetchData()
  }
}
</script>

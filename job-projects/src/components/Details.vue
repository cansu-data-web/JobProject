<template>
  <div class="container">
    <h3>User Detail</h3>
    <hr>
    <p> Kullanıcının ID Bilgisi : {{ $route.params.id }}</p>
    <p> Kullanıcının İsmi : {{ $route.params.name }}</p>
    <p> Kullanıcının Kullanıcı Adı: : {{ $route.params.username }}</p>
    <p> Kullanıcının Telefonu : {{ $route.params.phone }}</p>
    <p> Kullanıcının Adresi : {{ $route.params.address }}</p>
    <p> Kullanıcının Şirket : {{ $route.params.company }}</p>
    
  </div>
</template>
<script>
  export default {}
</script>

<template>
  <div class="home">
    <h1 class="green black--text">Homepage </h1>

    <v-btn class="pink text--white">Click-me</v-btn>
    <v-btn>Click-me</v-btn>

    <v-btn left small class="pink white--text" >
      <v-icon left small>mdi-email</v-icon>
      <span> email-me </span>
    </v-btn>

    <v-btn large  class="pink white--text" left small>
      <v-icon left large>mdi-email</v-icon>
      <span>email-me</span>
    </v-btn>

    <v-btn fab class="pink green--text">
        <v-icon>mdi-heart</v-icon>
    </v-btn>
    

  </div>
    

</template>

<script>


  export default {
    name: 'Home',

  
  }
</script>

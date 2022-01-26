<template>
  <v-app>
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/bg.jpg')"
      class="white--text"
      gradient="to bottom, rgba(255,255,255, .9), rgba(255,255,255, .9)"
    >
    <v-main>
      <router-view></router-view>
    </v-main>
    </v-img>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

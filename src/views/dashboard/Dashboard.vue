<template>
  <v-app>
    <DashboardNavBar/>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </v-app>
</template>

<script>
import DashboardNavBar from "@/components/DashboardNavBar"
export default {
  name:"Dashboard",
  components:{
    DashboardNavBar,
  }
};
</script>

<style>
</style>
<template>
    <v-app>    
      <sidebar/>
      <dashboard />
      <!-- <dashboard-core-drawer />
  
      <dashboard-core-view /> -->
    </v-app>
  </template>
  
  <script>
  import dashboard from "../components/core/View.vue";
  import sidebar from "../components/Sidebar.vue";
  export default {
    name: "DashboardIndex",
  
    components: {
      // DashboardCoreDrawer: () => import('../components/Sidebar.vue'),
      dashboard,
      sidebar
    },
  
    data: () => ({
      // expandOnHover: false,
    }),
  };
  </script>
<template>
	<v-navigation-drawer expand-on-hover rail>
	  <v-list>
		<v-list-item
		  prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
		  title=ass
		  subtitle="sandra_a88@gmailcom"
		  v-model="nik"
		></v-list-item>
	  </v-list>
	  
	  <v-divider></v-divider>
  
	  <v-list nav dense>
		<v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
		  <v-list-item-icon>
			<v-icon>{{ item.icon }}</v-icon>
		  </v-list-item-icon>
		  <v-list-item-title>{{ item.text }}</v-list-item-title>
		</v-list-item>
	  </v-list>
	</v-navigation-drawer>
  </template>
  <script>
  export default {
	name: "DashboardCoreDrawer",
	data: () => ({
	  ini: [
		  { text: 'Real-Time' },
		],
	  items: [
		{
		  icon: "mdi-folder",
		  text: "Home",
		  link: "/",
		},
		{
		  icon: "mdi-account-multiple",
		  text: "Create",
		  link: "/create",
		},
		{
		  icon: "mdi-star",
		  text: "Logout",
		  link: "/login",
		},
	  ],
	}),
	
  };
  </script>
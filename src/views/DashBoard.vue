<template>
    <v-container class="ml-auto">
      <v-row>
        <h1>List Data</h1>
      </v-row>
      <v-row>
        <v-table density="compact" >
          <thead>
            <tr>
              <th>branchName</th>
              <th>branchCode</th>
              <th>branchDetail</th>
              <th>umr</th>
              <th>tanggalMasuk</th>
              <th>tanggalKeluar</th>
              <th>namaPelaksana</th>
              <th>jabatan</th>
              <th>nik</th>
              <th>tanggalLahir</th>
              <th>jenisKelamin</th>
              <th>vendor</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="item in products" :key="item.branchName">
              <td>{{ item.branchName }}</td>
              <td>{{ item.branchCode }}</td>
              <td>{{ item.branchDetail }}</td>
              <td>{{ item.umr }}</td>
              <td>{{ item.tanggalMasuk }}</td>
              <td>{{ item.tanggalKeluar }}</td>
              <td>{{ item.namaPelaksana }}</td>
              <td>{{ item.jabatan }}</td>
              <td>{{ item.nik }}</td>
              <td>{{ item.tanggalLahir }}</td>
              <td>{{ item.jenisKelamin }}</td>
              <td>{{ item.vendor }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import Navbar from "../components/Navbar.vue";
  export default {
    data() {
      return {
        products: [],
      };
    },
    created() {
      this.getProducts();
    },
    methods: {
      async getProducts() {
        try {
          const response = await axios.get(
            "http://localhost:8070/hrmanagement/info/api/resourceData/getResourceDataAll"
          );
          this.products = response.data.data;
          console.log(response.data.data);
        } catch (err) {
          console.log(err);
        }
      },
    },
    components: {},
  };
  </script>
  
  <style></style>
<template>
  <v-container class="ml-10">
    <h1>create</h1>
    <br />
    <v-row no-gutters>
      <v-col>
        <v-form fast-fail>
          <v-row>
            <v-col cols="12" md="4">
              <v-select v-model="branchName" :items="itemBranchName" label="Branch Name"></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select v-model="branchCode" :items="itemBranchCode" label="Branch Code"></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select v-model="branchDetail" :items="itemBranchDetail" label="Branch Detail"></v-select>
            </v-col>
          </v-row>

          <v-text-field v-model="umr" label="UMR" type="number"></v-text-field>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="tanggalMasuk" label="Tanggal Masuk" type="date"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="tanggalKeluar" label="Tanggal Keluar" type="date"></v-text-field>
            </v-col>
          </v-row>
          <v-text-field v-model="namaPelaksana" label="Nama Pelaksana"></v-text-field>
          <v-select v-model="jabatan" :items="itemJabatan" label="Jabatan"></v-select>
          <v-text-field v-model="nik" label="Nik"></v-text-field>
          <v-text-field v-model="tanggalLahir" label="Tanggal Lahir" type="date"></v-text-field>
          <v-select v-model="jenisKelamin" :items="itemJenisKelamin" label="Jenis Kelamin"></v-select>
          <v-text-field v-model="vendor" label="Vendor"></v-text-field>
          <v-btn block class="mt-2" @click="setProducts">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Konfirmasi</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Apakah Anda Yakin Untuk Membuat Data Baru?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <!--modal 2-->
    <!-- <div
      class="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            Data berhasil di simpan.
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div> -->
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    products: [],
    branchName: null,
    itemBranchName: ["Item 1", "Item 2", "Item 3", "Item 4"],
    branchCode: null,
    itemBranchCode: ["0123", "0125", "0000"],
    branchDetail: null,
    itemBranchDetail: ["Cabang", "Satelit"],
    jabatan: null,
    itemJabatan: ["OB", "Security"],
    jenisKelamin: null,
    itemJenisKelamin: ["L", "P"],
    umr: null,
    namaPelaksana: '',
    nik: '',
    vendor: ''

  }),
  methods: {
    async setProducts() {
      try {
        await axios
          .post(
            "http://localhost:8070/hrmanagement/info/api/resourceData/saveResourceData",
            {
              branchName: this.branchName,
              branchCode: this.branchCode,
              branchDetail: this.branchDetail,
              umr: this.umr,
              tanggalMasuk: this.tanggalMasuk,
              tanggalKeluar: this.tanggalKeluar,
              namaPelaksana: this.namaPelaksana,
              jabatan: this.jabatan,
              nik: this.nik,
              tanggalLahir: this.tanggalLahir,
              jenisKelamin: this.jenisKelamin,
              vendor: this.vendor
            }
          )
          .then(console.log("sukses"));


      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style></style>
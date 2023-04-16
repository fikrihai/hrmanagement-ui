<template>
  <main id="create-page">
    <h1>create</h1>
    <div class="card mb-3 mr-3" style="width: 40%;">
      <div class="card-header">
        Input data baru
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label class="form-label">Branch Name</label>
          <select class="form-control select2" aria-label="Default select example">
            <option selected>Branch Name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Branch Code</label>
          <select class="form-control select2" aria-label="Default select example">
            <option selected>Branch Code</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Branch Detail</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Branch Detail</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">UMR</label>
          <input type="number" class="form-control" placeholder="UMR" />
        </div>
        <div class="mb-3">
          <label class="form-label">Tanggal Masuk</label>
          <input type="date" class="form-control" placeholder="Tanggal Masuk" />
        </div>
        <div class="mb-3">
          <label class="form-label">Tanggal Keluar</label>
          <input type="date" class="form-control" placeholder="Tanggal Keluar" />
        </div>
        <div class="mb-3">
          <label class="form-label">Nama Pelaksana</label>
          <input type="text" class="form-control" placeholder="Nama Pelaksana" />
        </div>
        <div class="mb-3">
          <label class="form-label">Jabatan</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Jabatan</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">NIK</label>
          <input type="text" class="form-control" placeholder="NIK" />
        </div>
        <div class="mb-3">
          <label class="form-label">Tanggal Lahir</label>
          <input type="date" class="form-control" placeholder="Tanggal Lahir" />
        </div>
        <div class="mb-3">
          <label class="form-label">Jenis Kelamin</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Jenis Kelamin</option>
            <option value="L">L</option>
            <option value="P">P</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Vendor</label>
          <input type="text" class="form-control" placeholder="Vendor" />
        </div>
        <div type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Submit
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Konfirmasi</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Apakah Anda Yakin Untuk Membuat Data Baru?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!--modal 2-->
    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1">
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
    </div>
  </main>
</template>
  
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
  },
};
</script>
  
<style></style>
  
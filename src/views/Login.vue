<template>
  <v-container>
    <v-row align="center" no-gutters style="height: 150px;">
      <v-col>
        <v-sheet width="300" class="mx-auto">
          <v-form ref="form">
            <v-text-field
              v-model="nik"
              label="NIK"
              :rules="NikRules"
            ></v-text-field>

            <v-text-field
              v-model="Password"
              label="Password"
              type="Password"
              :rules="PasswordRules"
            ></v-text-field>
            <v-btn block class="mt-2" @click="validate">Submit</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isAuth: true,
    nik: "",
    NikRules: [
      // (v) => !!v || "Nik Tidak boleh kosong",
      (value) => {
        if (value?.length > 1) return true;
        return "Nik tidak boleh kosong";
      },
    ],
    Password: "",
    PasswordRules: [
      (value) => {
        if (value?.length > 1) return true;

        return "Password tidak boleh kosong";
      },
    ],
  }),
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid)
        this.$router.push({
          name: "dasboard",
          //params: { userId: this.nik }
        });
    },
    goToDasboard() {
      if (this.isAuth) {
        this.$router.push("/");
      }
    },
  },
};
</script>
<template>
  <v-main class="main">
    <v-form class="main_container">
      <v-card max-width="500px">
        <router-link :to="{ name: 'Home' }" class="logo">
          <img
            src="https://res.cloudinary.com/codiini/image/upload/v1616765127/tripma-blue_mausgl.svg"
          />
        </router-link>
        <v-card-title class="flex items-center justify-center">
          <span class="headline">Sign up for Tripma</span>
        </v-card-title>
        <v-card-subtitle
          class="mt-3 px-16 text-center flex items-center justify-center"
        >
          Tripma is totally free to use. Sign up using your email address or
          phone number below to get started.
        </v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Username"
              required
              outlined
              dense
              v-model="form.displayName"
            >
            </v-text-field>
            <v-text-field
              label="Email"
              required
              outlined
              dense
              v-model="form.email"
              :rules="$store.state.emailRules"
            >
            </v-text-field>

            <v-text-field
              label="Password"
              outlined
              required
              dense
              v-model="form.password"
              :rules="$store.state.passwordRules"
            ></v-text-field>
            <v-checkbox v-model="termsCheckbox">
              <template v-slot:label>
                <div>
                  I agree to the
                  <a target="_blank" href="#" @click.stop>
                    Terms and Conditions
                  </a>
                </div>
              </template>
            </v-checkbox>
            <v-checkbox v-model="dealsCheckbox">
              <template v-slot:label>
                <div>Send me the latest deals and alerts</div>
              </template>
            </v-checkbox>
            <v-btn
              @click.prevent="signUpForm"
              elevation="0"
              :disabled="!termsCheckbox ? '' : disabled"
              color="#605DEC"
              class="white--text w-full mt-8"
              >Create Account</v-btn
            >
          </v-container>
        </v-card-text>
      </v-card>
    </v-form>
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      form: { email: "", password: "", displayName: "" },
      disabled: false,
      termsCheckbox: false,
      dealsCheckbox: false,
    };
  },
  methods: {
    ...mapActions({
      signUp: "auth/signUpAction",
    }),
    signUpForm() {
      this.signUp(this.form);
    },
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
}
.logo img {
  width: 150px;
  height: auto;
}
.main_container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-btn,
button {
  text-transform: initial;
  border-radius: 4px;
}
.v-btn.v-size--default {
  font-size: 1.08rem;
}
</style>

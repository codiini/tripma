<template>
  <v-main class="main">
    <v-form class="main_container">
      <v-card max-width="500px">
        <div v-if="alert">
          <v-alert
            v-model="successMsg"
            color="success"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-check"
          >
            Sign In Successful! Redirecting you in a few seconds....
          </v-alert>
        </div>
        <router-link :to="{ name: 'Home' }" class="logo">
          <img
            src="https://res.cloudinary.com/codiini/image/upload/v1616765127/tripma-blue_mausgl.svg"
          />
        </router-link>
        <v-card-title class="flex items-center justify-center">
          <span class="headline">Welcome back!</span>
        </v-card-title>
        <v-card-subtitle
          class="mt-3 px-16 text-center flex items-center justify-center"
        >
          Please sign-in to your account let's start the adventure
        </v-card-subtitle>
        <v-card-text>
          <v-container>
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
            <p class="text-base">
              Don't have an account yet?
              <router-link :to="'/sign-up'">Create One</router-link>
            </p>
            <p class="text-base">
              <router-link :to="'/forgot-password'">
                Forgot Password?</router-link
              >
            </p>
            <v-btn
              :loading="btnLoadingState"
              @click.prevent="signInForm"
              elevation="0"
              color="#605DEC"
              class="white--text w-full mt-8"
              >Sign in</v-btn
            >
          </v-container>
        </v-card-text>
      </v-card>
    </v-form>
  </v-main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      alert: false,
      form: {
        email: "",
        password: "",
      },
      signInModal: false,
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signInAction",
    }),
    signInForm() {
      this.signIn(this.form);
    },
  },
  computed: {
    ...mapState({
      btnLoadingState: (state) => state.auth.formBtnLoader,
      successMsg: (state) => state.auth.signInSuccess,
    }),
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

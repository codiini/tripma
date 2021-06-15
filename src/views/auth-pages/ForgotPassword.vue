<template>
  <v-main>
    <v-form class="main_container">
      <v-card max-width="500px">
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
          Don't fret! Just type in your email and we will send you a code to
          reset your password! ;)
        </v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Email"
              required
              outlined
              dense
              v-model="email"
              :rules="$store.state.emailRules"
            >
            </v-text-field>
            <v-btn elevation="0" color="#605DEC" class="w-full mt-8 white--text"
              >Send reset link</v-btn
            >
            <v-btn
              :to="{ name: 'Home' }"
              elevation="0"
              color="white"
              class="w-full mt-8"
              >Go back home</v-btn
            >
          </v-container>
        </v-card-text>
      </v-card>
    </v-form>
  </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      email: "",
    };
  },
  computed: {
    ...mapState({
      btnLoadingState: (state) => state.auth.formBtnLoader,
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

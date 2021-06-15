import firebase from "firebase/app";
import router from "../../router/index";

const initialState = () => {
  return {
    user: null,
    error: null,
    formBtnLoader: null,
  };
};

const getters = {};

// actions
const actions = {
  signUpAction({ commit }, payload) {
    // Sets loading animation for button loader
    commit("formBtnLoader", true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        const user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: payload.displayName,
        });
      })
      .finally(() => {
        // ends loading animation for button
        commit("formBtnLoader", false);
        router.push({ name: "Dashboard" });
      })
      .catch((error) => {
        alert("Oops. " + error.message);
      });
  },
  signInAction({ commit }, payload) {
    commit("formBtnLoader", true);
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user);
      })
      .finally(() => {
        commit("formBtnLoader", false);
        router.push({ name: "Dashboard" });
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },
  // resetPasswordAction({commit}, payload){

  // }
};

// mutations
const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  formBtnLoader(state, payload) {
    state.formBtnLoader = payload;
  },
};

export default {
  namespaced: true,
  state: initialState(),
  getters,
  actions,
  mutations,
};

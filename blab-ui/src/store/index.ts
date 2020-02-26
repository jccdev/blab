import Vue from 'vue';
import Vuex, { Action, Mutation, GetterTree, Getter } from 'vuex';
import { ClientState } from './client-state';
import router from '@/router';

Vue.use(Vuex);

const state: ClientState = {
  isAuthenticated: false,
  authUser: null
};

const isAuthenticated: Getter<ClientState, ClientState> = (state) => state.isAuthenticated;
const getters: GetterTree<ClientState, ClientState> = {
  isAuthenticated
};

const authenticate: Action<ClientState, ClientState> = async ({ commit }, path: string) => {
  commit('setAuth', true);
  return true;
};

const logout: Action<ClientState, ClientState> = async ({ commit }) => {
  commit('setAuth', false);
};

const actions = {
  authenticate,
  logout
};

const setAuth: Mutation<ClientState> = (state, payload: boolean) => {
  state.isAuthenticated = payload;
};

const mutations = {
  setAuth
};

export default new Vuex.Store<ClientState>({
  state,
  getters,
  mutations,
  actions,
  modules: {}
});

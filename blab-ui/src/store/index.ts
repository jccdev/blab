import { AuthForm } from '../shared/models/auth-form';
import Vue from 'vue';
import Vuex, { Action, Mutation, GetterTree, Getter } from 'vuex';
import { ClientState } from './client-state';
import router from '@/router';
import axios from 'axios';

Vue.use(Vuex);

const state: ClientState = {
  isAuthenticated: false,
  authUser: null
};

const isAuthenticated: Getter<ClientState, ClientState> = (state) => state.isAuthenticated;
const getters: GetterTree<ClientState, ClientState> = {
  isAuthenticated
};

const authenticate: Action<ClientState, ClientState> = async ({ commit }, form: AuthForm) => {
  const result = await axios.post('http://localhost:3000/auth', form);
  commit('setAuth', true);
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

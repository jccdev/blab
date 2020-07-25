import { SignUpForm } from './../shared/models/sign-up-form';
import { AuthUser } from '@/shared/models/auth-user';
import { AuthForm } from '@/shared/models/auth-form';
import Vue from 'vue';
import Vuex, { Action, Mutation, GetterTree, Getter } from 'vuex';
import { ClientState } from '@/shared/models/client-state';
import router from '@/router';
import axios from 'axios';
import { SignUpResponse } from '@/shared/models/sign-up-response';
import { Channel } from '@/shared/models/channel';
import { ChannelFolder } from "@/shared/models/channel-folder";

Vue.use(Vuex);

const state: ClientState = {
  isAuthenticated: false,
  authUser: null,
  signUpResponse: null,
  channel_detail: [
    new Channel({name: "welcome"}),
    new ChannelFolder({
      name: "general",
      channels: [
        new Channel({name: "general"}),
        new Channel({name: "current-events"}),
        new Channel({name: "meetups"}),
      ]
    }),
    new ChannelFolder({
      name: "entertainment",
      channels: [
        new Channel({name: "games"}),
        new Channel({name: "music"}),
        new Channel({name: "movies-and-tv"}),
      ]
    }),
  ]
};

const isAuthenticated: Getter<ClientState, ClientState> = state =>
  state.isAuthenticated;
const getters: GetterTree<ClientState, ClientState> = {
  isAuthenticated
};

const signUp: Action<ClientState, ClientState> = async (
  { commit },
  form: SignUpForm
) => {
  const result = await axios.post<AuthUser>(
    'http://localhost:3000/auth/sign-up',
    form
  );
  commit('onSignUp', result);
};

const authenticate: Action<ClientState, ClientState> = async (
  { commit },
  form: AuthForm
) => {
  const result = await axios.post<AuthUser>('http://localhost:3000/auth', form);
  commit('setAuth', result);
};

const logout: Action<ClientState, ClientState> = async ({ commit }) => {
  commit('setAuth', null);
};

const actions = {
  authenticate,
  logout,
  signUp
};

const setAuth: Mutation<ClientState> = (state, payload: AuthUser) => {
  state.isAuthenticated = payload == null;
  state.authUser = payload;
};

const onSignUp: Mutation<ClientState> = (state, payload: SignUpResponse) => {
  state.signUpResponse = payload;
};

const mutations = {
  setAuth,
  onSignUp
};

export default new Vuex.Store<ClientState>({
  state,
  getters,
  mutations,
  actions,
  modules: {}
});

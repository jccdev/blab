<template>
  <div
    class="container d-flex align-items-center justify-content-center text-center"
    style="height: 100%"
  >
    <form v-on:submit.prevent="signIn">
      <h1>BLAB</h1>
      <h3 class="mb-3 font-weight-normal">Please sign in</h3>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="text"
        id="inputUserName"
        class="form-control"
        placeholder="User Name"
        v-model="form.userName"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="form.password"
      />
      <!-- <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div> -->
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  </div> 
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import store from '@/store';
import router from '@/router';
import { AuthForm } from '../shared/models/auth-form';

export default defineComponent({
  setup() {
    const form = reactive(new AuthForm());

    const signIn = async () => {
      const result = await store.dispatch('authenticate', form);
      if (result) {
        router.push({ path: '/home' });
      }
    };
    return {
      form,
      signIn
    };
  }
});
</script>

<style></style>

<template>
  <div
    class="container d-flex align-items-center justify-content-center text-center"
    style="height: 100%"
  >
    <form v-on:submit.prevent="signUp">
      <h1>BLAB</h1>
      <h3 class="mb-3 font-weight-normal">Sign Up</h3>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="far fa-envelope"></i>
            </span>
          </div>
          <input
            type="text"
            id="inputEmail"
            class="form-control"
            placeholder="Email Address"
            v-model="form.userName"
            required
            autofocus
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputUserName" class="sr-only">User Name</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="far fa-user"></i>
            </span>
          </div>
          <input
            type="text"
            id="inputUserName"
            class="form-control"
            placeholder="User Name"
            v-model="form.userName"
            required
          />
        </div>
      </div>
      <BlabInputMask
        v-model="form.password"
        :required="true"
        placeholder="Password"
      >
        <label for="inputPassword" class="sr-only">Password</label>
      </BlabInputMask>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign Up
      </button>
      <router-link
        class="btn btn-lg btn-outline-secondary btn-block"
        to="/sign-in"
      >
        Sign in
      </router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { SignUpForm } from '@/shared/models/sign-up-form';
import BlabInputMask from '@/components/BlabInputMask.vue';
import store from '@/store';
import router from '@/router';

export default defineComponent({
  components: {
    BlabInputMask
  },
  setup() {
    const form = reactive(new SignUpForm());
    const signUp = async () => {
      const result = store.dispatch('sign-up', form);
      if (result) {
        router.push({ path: '/sign-in' });
      }
    };

    return {
      form,
      signUp
    };
  }
});
</script>

<style></style>

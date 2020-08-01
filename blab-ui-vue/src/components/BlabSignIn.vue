<template>
  <div
    class="container d-flex align-items-center justify-content-center text-center"
    style="height: 100%"
  >
    <form v-on:submit.prevent="signIn">
      <h1>BLAB</h1>
      <h3 class="mb-3 font-weight-normal">Please sign in</h3>

      <div class="form-group">
        <label for="inputEmail" class="sr-only">User name or email</label>
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
            placeholder="User name or email"
            v-model="form.userName"
            required
            autofocus
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
      <!-- <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div> -->
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <router-link
        class="btn btn-lg btn-outline-secondary btn-block"
        to="/sign-up"
      >
        Sign up
      </router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import store from '@/store';
import router from '@/router';
import { AuthForm } from '../shared/models/auth-form';
import BlabInputMask from '@/components/BlabInputMask.vue';

export default defineComponent({
  components: { BlabInputMask },
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

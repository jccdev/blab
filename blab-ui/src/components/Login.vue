<template>
  <div class="container d-flex align-items-center justify-content-center" style="height: 100%">
    <h1>LOGIN</h1>
    <button @click="login" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import store from '@/store';
import router from '@/router';

export default defineComponent({
  setup() {
    const login = async () => {
      const result = await store.dispatch('authenticate');
      if(result){
        router.push({ path: '/home' })
      }
    };
    return {
      login
    }
  }
});
</script>

<style>

</style>
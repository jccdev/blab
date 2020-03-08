<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/home" class="navbar-brand col-sm-3 col-md-2 mr-0">Blab</router-link>
      <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <button type="button" class="btn btn-link nav-link" @click="logout">Sign out</button>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <!-- <a class="nav-link active" href="#"> -->
                <router-link to="/home" class="nav-link" active-class="active">Home</router-link> 
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link active" href="#"> -->
                <router-link to="/about" class="nav-link" active-class="active">About</router-link>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view /> 
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import store from '@/store';

export default defineComponent({
  setup() {
    const logout = async () => {
      await store.dispatch('logout');
    };
    return {
      logout
    }
  }
});
</script>

<style>

</style>
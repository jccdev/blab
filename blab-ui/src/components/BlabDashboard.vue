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
              <template v-for="(item, i) in channels">
                <div :key = "i">
                  <li class="nav-item" v-if="item.type === ModelTypes.Channel">
                    <router-link to="/channel" class="nav-link" active-class="active">
                      <i class="fas fa-hashtag"></i>
                      {{item.name}}
                    </router-link> 
                  </li>
                  <li class="nav-item" v-if="item.type === ModelTypes.ChannelFolder">
                    <a class="nav-link">
                      <i class="fas fa-caret-right" v-if="!item.expanded"></i>
                      <i class="fas fa-caret-down" v-if="item.expanded"></i>
                      {{item.name}}
                    </a>
                    <ul class="nav flex-column" v-if="item.expanded">
                      <li class="nav-item" v-for="(innerChannel, i) in channels" :key="i">
                        <router-link to="/channel" class="nav-link" active-class="active">
                          <i class="fas fa-hashtag"></i>
                          {{innerChannel.name}}
                        </router-link> 
                      </li>
                    </ul>
                  </li>
                </div>
              </template>
              <!-- <li class="nav-item">
                <router-link to="/home" class="nav-link" active-class="active">Home</router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" active-class="active">About</router-link>
              </li> -->
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
import { ModelTypes } from '@/shared/models/_model_types';

export default defineComponent({
  setup() {
    const channels = store.state.channel_detail;
    const logout = async () => {
      await store.dispatch('logout');
    };
    return {
      logout,
      ModelTypes,
      channels
    }
  }
});
</script>

<style>

</style>
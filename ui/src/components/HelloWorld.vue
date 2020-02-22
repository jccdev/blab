<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClientState } from '../../../shared/models/client-state';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    msg: String
  }
  // type inference enabled
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

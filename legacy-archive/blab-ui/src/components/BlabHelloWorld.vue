<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="n in 1000" :key="n">
      <h2>Element: {{n}}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
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

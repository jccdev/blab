<template>
  <div class="home">
    <BlabHelloWorld msg="Welcome to Blab." />
  </div>
</template>

<script>
// @ is an alias to /src
import BlabHelloWorld from '@/components/BlabHelloWorld.vue';

export default {
  name: 'Home',
  components: {
    BlabHelloWorld
  }
};
</script>

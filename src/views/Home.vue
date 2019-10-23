<template>
  <div class="home">
    <h1>This is a Home page</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: 'hello-world',
  components: {
    HelloWorld,
  },
}
</script>
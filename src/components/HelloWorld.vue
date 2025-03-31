<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const exploreMode = ref(2)
</script>

<template>
  <h1>{{ msg }}</h1>
<Button>Kuba</Button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <input type="radio" name="explore-mode" value="1" v-model="exploreMode">
  <input type="radio" name="explore-mode" value="2" v-model="exploreMode">
  <input type="radio" name="explore-mode" value="3" v-model="exploreMode">

  <p v-if="exploreMode === 2">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<template>
  <footer class="bg-gray-100 flex justify-center border-t-2 border-gray-300">
    <div class="container p-10 flex justify-center content-center">
      <p class="text-sm">&copy;{{ year }} Not Really Copyrighted</p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>

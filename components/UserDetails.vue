<template>
  <div class="m-8 p-4 border-1 bg-gray-50">
    <div>
      <h2 class="mb-2 font-bold text-xl border-b-2 border-gray-200">
        User Details
      </h2>
      <p class="mb-2" v-if="isLoadingUser">Loading...</p>

      <div v-if="user">
        <p class="mb-2">
          <span class="font-bold">Name:</span>
          <span>{{ user.name }}</span>
        </p>
        <p class="mb-2">
          <span class="font-bold">Email:</span>
          <span>{{ user.email }}</span>
        </p>
        <p class="mb-2">
          <span class="font-bold">Phone:</span>
          <span>{{ user.phone }}</span>
        </p>
        <p class="mb-2">
          <span class="font-bold">Website:</span>
          <span>{{ user.website }}</span>
        </p>
        <p class="mb-2">
          <span class="font-bold">Company:</span>
          <span>{{ user.company.name }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '@/types/users'

export default Vue.extend({
  name: 'UserDetails',
  data() {
    return {
      user: null as IUser | null,
      isLoadingUser: false,
    }
  },

  methods: {
    async getUser() {
      const userId = this.$route.params.id
      this.isLoadingUser = true
      try {
        this.user = await this.$repository.users.getUser(userId)
      } catch (e) {
        console.error(e)
      } finally {
        this.isLoadingUser = false
      }
    },
  },

  async created() {
    await this.getUser()
  },
})
</script>

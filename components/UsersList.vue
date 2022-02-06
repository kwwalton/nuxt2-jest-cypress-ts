<template>
  <div class="m-8 p-4 border-1 bg-gray-50">
    <div>
      <h2 class="mb-2 font-bold text-xl border-b-2 border-gray-200">
        Users List
      </h2>
      <p class="mb-4" v-show="!users.length">
        Click the button to load the list of users.
      </p>
      <button
        class="py-2 px-4 bg-green-600 text-white rounded border-1 border-green-800 hover:bg-green-700 transition-color ease"
        @click="getUsers"
        v-show="!users.length"
        data-test="get-users-button"
      >
        Load Users
      </button>
    </div>
    <p class="mb-2" v-if="isLoadingUsers">Loading...</p>
    <ul v-if="users.length" data-test="user-list">
      <li
        v-for="user in users"
        :key="user.id"
        class="py-1 mb-3"
        data-test="user"
      >
        <nuxt-link
          :to="`/user/${user.id}`"
          class="p-2 bg-gray-100 hover:bg-gray-200 rounded"
        >
          <span>{{ user.name }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { IUser } from '@/types/users'

export default Vue.extend({
  name: 'UsersList',
  computed: {
    ...mapState({
      users: (state) => (state as any).users.users as Array<IUser>,
      isLoadingUsers: (state) => (state as any).users.isLoadingUsers as boolean,
    }),
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
    }),
  },
})
</script>

<template>
  <div style="height: 100vh; display: flex; align-items: center">
    <v-container>
      <section class="my-5">
        <v-btn
          variant="tonal"
          prepend-icon="mdi-arrow-left"
          rounded="x-large"
          class="bg-blue-lighten-5"
          size="large"
          @click="$router.push('/')"
        >
          back to home page</v-btn
        >
      </section>
      <!-- {{ userDetails }} -->
      <v-label class="text-h3">Welcome to Regrestration Page</v-label>
      <v-text-field label="Name" v-model="userDetails.name"></v-text-field>
      <v-text-field label="Email" v-model="userDetails.email"></v-text-field>
      <v-text-field
        label="Password"
        v-model="userDetails.password"
      ></v-text-field>
      <v-btn
        text="register"
        @click="authStore.registerUser(userDetails)"
      ></v-btn>
      <div>
        <v-btn
          text="Already Regiser? login"
          @click="$router.push('/login')"
          class="my-3"
        ></v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
const authStore = useAuthStore();
definePageMeta({
  layout: "login",
});
const userDetails = ref({
  name: null,
  email: null,
  password: null,
});
</script>

<style lang="scss" scoped>
</style>
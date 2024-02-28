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
      <!-- {{ userData }} -->
      <v-label class="text-h3">Welcome to Login Page</v-label>
      <v-text-field label="Email" v-model="userData.email"></v-text-field>
      <v-text-field label="Password" v-model="userData.password"></v-text-field>
      <v-btn text="login" @click="authStore.login(userData)"></v-btn>
      <div>
        <v-btn text="No Account? Register here.
" @click="$router.push('/register')" class=" my-3"></v-btn>
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

const userData = ref({
  email: null,
  password: null,
});
</script>

<style lang="scss" scoped>
</style>
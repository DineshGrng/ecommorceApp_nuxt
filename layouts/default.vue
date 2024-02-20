<template>
  <div>
    <NuxtLoadingIndicator />

    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>eCommerce</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn> -->

        <v-btn
          variant="text"
          prepend-icon="mdi-cart"
          @click="$router.push('/carts')"
          >{{ cartStore.items.length }}</v-btn
        >
        <v-btn
          variant="text"
          prepend-icon="mdi-login"
          text="Logout"
          @click="authStore.logout()"
          v-if="authStore.token != null"
        >
          Logout
          <v-processor-circular
            v-if="authStore.loading"
            indeterminate
            color="primary"
          >
          </v-processor-circular>
        </v-btn>
        <v-btn
          variant="text"
          prepend-icon="mdi-login"
          text="login"
          @click="$router.push('/login')"
          v-else
        ></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </div>
</template>
<script setup>
import { useAuthStore } from "~/store/auth";
const authStore = useAuthStore();
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
cartStore.getCartItems();
authStore.getToken();
import { ref, watch } from "vue";

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>
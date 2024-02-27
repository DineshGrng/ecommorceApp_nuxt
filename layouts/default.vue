<template>
  <div>
    <NuxtLoadingIndicator />
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <!-- <v-system-bar class="bg-blue-darken-2">
        <span >{{ companyStore.company.address }}</span>
      </v-system-bar> -->
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-btn variant="text" @click="$router.push('/')">
            <!-- <v-img height="75" :src="companyStore.company.logo" :lazy-src="companyStore.company.logo">

          </v-img> -->
            {{ companyStore.company.name }}</v-btn>
        </v-toolbar-title>

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
        <v-list>
          <v-btn variant="text" @click="productStore.getProducts()">
            All Products</v-btn
          >
          <!-- @click="$router.push('/')" -->
          <v-list-item
            link
            v-for="category in categoryStore.categories"
            :key="category"
            :value="category.id"
            @click="productStore.getProductsByCategory(category.id)"
            >{{ category.name }}</v-list-item
          >
        </v-list>
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

import { usecategoryStore } from "~/store/categories";
const categoryStore = usecategoryStore();
await categoryStore.getCategory();

import { useProductStore } from "~/store/product";
const productStore = useProductStore();
await productStore.getProducts();

import { useCompanyStore } from "~/store/company";
const companyStore = useCompanyStore();
await companyStore.getCompany();

cartStore.getCartItems();
authStore.getToken();

import { ref, watch } from "vue";

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>
<template>
  <div>
    <v-container>
      <div v-for="p in cartStore.items" :key="p.id">
      <div class="border mb-2 pa-4">
          <div>
          <v-img
            :src="p.image"
            :lazy-src="p.image"
            height="100"
            width="100"
          ></v-img>
        </div>

        <div>
          <h5>{{ p.product }}</h5>
          <p>({{ p.qty }}) * {{ p.price }} = {{ p.amount }}</p>
        </div>
      </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>
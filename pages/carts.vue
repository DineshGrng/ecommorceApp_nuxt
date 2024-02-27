<template>
  <div class="bg-blue-lighten-5">
    <v-container>
      <!-- {{ cartStore.orderData }} -->
      <section class="my-5">
        <v-btn
          variant="tonal"
          prepend-icon="mdi-arrow-left"
          rounded="x-large"
          class="bg-blue-lighten-3"
          size="large"
          @click="$router.push('/')"
        >
          back</v-btn
        >
      </section>
      <section>
        <v-row>
        <div v-for="p in cartStore.items" :key="p.id">
          <v-col>
            <v-card :loading="loading" class="mx-auto my-3" width="274">
              <template v-slot:loader="{ isActive }">
                <v-progress-linear
                  :active="isActive"
                  color="deep-purple"
                  height="4"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" :src="p.image" :lazy-src="p.image"></v-img>

              <v-card-item>
                <v-card-title>{{ p.product }}</v-card-title>

                <v-card-subtitle class="pt-4">
                  <p>({{ p.qty }}) * {{ p.price }} = {{ p.amount }}</p>
                </v-card-subtitle>
              </v-card-item>

              <v-card-text>
                <div class="text-h5">{{ p.product }}</div>
              </v-card-text>

              <v-divider class="mx-4 mb-1"></v-divider>

              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </v-row>
      </section>
      <section class="mt-5" >
        
        <v-btn
          prepend-icon="mdi-check"
          rounded="x-large"
          class="bg-blue-lighten-3"
          size="large"
          @click="cartStore.placrOrder(cartStore.orderData)"
        >
          place Order
        </v-btn>
      </section>
    </v-container>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();

// import { useCheckoutStore } from "~/store/checkout";
// const checkoutStore = useCheckoutStore();
</script>

<style lang="scss" scoped>
</style>
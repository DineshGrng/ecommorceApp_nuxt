<template>
  <div class="bg-blue-lighten-5">
    <v-container>
      <!-- {{ cartStore.items }} -->
      <v-btn
          variant="tonal"
          prepend-icon="mdi-arrow-left"
          @click="$router.push('/')"
          >  back</v-btn
        >
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
                <div>{{ p.product }}</div>
              </v-card-text>

              <v-divider class="mx-4 mb-1"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-actions>
                <v-btn color="orange"> Share </v-btn>

                <v-btn color="orange"> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <v-container>
       <v-row>
      <div v-for="p in cartStore.items" :key="p.id">
       
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <v-img
              class="align-end text-white"
              height="250"
              :src="p.image"
              :lazy-src="p.image"
              cover
            >
              <v-card-title> {{ p.product }} </v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              <p>({{ p.qty }}) * {{ p.price }} = {{ p.amount }}</p>
            </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>

              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
       
          <!-- <div class="border mb-2 pa-4"> -->
          <!-- <div>
            <v-img
              :src="p.image"
              :lazy-src="p.image"
              height="120"
              width="120"
            ></v-img>
          </div>

          <div>
            <h5>{{ p.product }}</h5>
            <p>({{ p.qty }}) * {{ p.price }} = {{ p.amount }}</p>
          </div> -->
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
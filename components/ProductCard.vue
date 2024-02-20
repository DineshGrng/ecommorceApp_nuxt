<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="product.image" :lazy-src="product.image"></v-img>

    <v-card-item>
      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        <span class="me-2">Rs.{{ product.sellingPrice }}</span>
        <span
          class="text-decoration-line-through text-red"
          v-if="product.discount"
          >Rs.{{ product.price }}</span
        >
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <div class="px-4">
      <v-btn icon="mdi-minus " @click="remove()"></v-btn>
      <v-label class="px-5 text-h5">{{ count }}</v-label>
      <v-btn icon="mdi-plus" @click="add()"></v-btn>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="
          cartStore.addToCart({
            product_id: product.id,
            qty: count,
            price: product.sellingPrice,
          })
        "
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const count = ref(1);
function add() {
  count.value++;
}
function remove() {
  count.value--;
  if (count.value < 1) {
    count.value = 1;
  }
}
defineProps({
  product: {},
});
</script>
import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useCartStore = defineStore("cart", {
    state: () => ({
        message: null,
        items: [],
        loading: false,
    }),

    actions: {
        async addToCart(cartData) {
            try {
                this.loading = true;
                var token = localStorage.getItem("token");
                var response = await axiosApi.post("cart", cartData, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status == 200) {
                    this.message = response.data.data.message;
                    alert(this.message);
                    this.getCartItems();
                }
            } catch (e) {
                console.warn("$e");
            } finally {
                this.loading = false;
            }
        },

        async getCartItems() {
            try {
                this.loading = true;
                var token = localStorage.getItem("token");
                var response = await axiosApi.get("cart", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status == 200) {
                    this.items = response.data.data; 
                    data;
                }
            } catch (e) {
                console.warn("$e");
            } finally {
                this.loading = false;
            }
        },
    },

});
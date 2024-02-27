import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useCartStore = defineStore("cart", {
    state: () => ({
        message: null,
        items: [],
        loading: false,
    }),


    getters: {
        orderData() {
            return {
                total: this.items.
                    map((i) => i.amount).
                    reduce((p, a) => p + a, 0),
                orderLines: this.items.map((i) => {
                    return {
                        product_id: i.product_id,
                        qty: i.qty,
                        amount: i.amount,
                    };
                }),
            };
        },
    },


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

        async placrOrder(orderData) {
            try {
                this.loading = true;
                var token = localStorage.getItem("token");
                var response = await axiosApi.post("order", orderData, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });
                if (response.status == 200) {
                    this.message = response.data.data.message;
                    alert(this.message);
                }
            } catch (e) {
                console.warn(e);
            } finally {
                this.loading = false;
                this.items = [];
            }

        },

    },

});
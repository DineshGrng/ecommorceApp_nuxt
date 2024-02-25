import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const usecategoryStore = defineStore('category', {
    state: () => ({
        categories: null,
        loading: false,
    }),

    actions: {
        async getCategory() {
            try {
                this.loading = true;
                var response = await axiosApi.get("categories");
                if (response.status === 200) {
                    this.categories = response.data.data;
                }
            } catch (e) {
                console.warn(e);
            } finally {
                this.loading = false;
            }
        },
    },
});
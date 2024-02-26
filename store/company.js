import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useCompanyStore = defineStore('company', {
    state: () => ({
        company: null,
        loading: false,
    }),

    actions: {
        async getCompany() {
            try {
                this.loading = true;
                var response = await axiosApi.get("company");
                if (response.status === 200) {
                    this.company = response.data.data;
                }
            } catch (e) {
                console.warn(e);
            } finally {
                this.loading = false;
            }
        },
    },
});
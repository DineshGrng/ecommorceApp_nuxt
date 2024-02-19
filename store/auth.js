import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null,
        loading: false
    }),

    actions: {
        async login(userData) {
            try {
                var response = await axiosApi.post("login", userData)
                if (response.status === 200) {
                    if (response.data.data.token != null) {
                        this.token = response.data.data.tokan;
                        localStorage.setItem("token", `${response.data.data.token}`)
                        navigateTo("/");
                    }
                }
            } catch (e) {
                console.warn(e);
            } finally {
                this.loading = false;
            }
        },
       async getToken(){
            this.token = localStorage.getItem("token") ?? null;
        },

        async logout(){
           try {
            var token = localStorage.getItem("token");
            this.loading = true;
            var response = await axiosApi.get("logout", {
                headers: { Authorization: `Bearer ${token}`},
            });
            console.warn(response.data);
            if(response.status === 200){
                // this.isloading = false;
                localStorage.removeItem("token");
                navigateTo("/login");
            }
            }catch(e){
                console.warn(e);
            }finally{
                this.loading = false;
            }
        },
    }
});  
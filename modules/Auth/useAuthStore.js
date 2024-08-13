import { create } from "zustand";
import { persist } from "zustand/middleware";
import AuthService from "@/services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment-timezone";
import useProfileStore from "@/modules/Profile/useProfileStore";

const useAuthStore = create(
  persist(
    (set, get) => ({
      username: "",
      password: "",
      registerUserName: "",
      registerPassword: "",
      registerRetryPassword: "",
      isAuth: false,
      isLoading: true,
      themeColor: "dark",
      rToken: "",
      createdAt: "createdAt",
      login: async () => {
        const toastId = toast.loading("Авторизация...");
        try {
          const res = await AuthService.login(get().username, get().password);
          set({
            isAuth: true,
            createdAt: moment(res.data.createdAt).format("DD-MM-YYYY HH:mm:ss"),
          });
          useProfileStore.getState().setSkinModel(res.data.skinModel);
          localStorage.setItem("token", res.data.accessToken);
          toast.update(toastId, {
            render: "Авторизирован",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        } catch (e) {
          toast.update(toastId, {
            render: e.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      },
      register: async () => {
        if (get().registerPassword !== get().registerRetryPassword) {
          return toast("Пароли должны совпадать", {
            render: "Пароли должны совпадать",
            type: "error",
            autoClose: 3000,
          });
        }
        if (!get().rToken) {
          return toast('Не выполнена проверка "Я не робот"', {
            render: "Пароли должны совпадать",
            type: "error",
            autoClose: 3000,
          });
        }
        const toastId = toast.loading("Регистрация...");
        try {
          const res = await AuthService.register(
            get().registerUserName,
            get().registerPassword,
            get().rToken,
          );
          set({
            isAuth: true,
            username: get().registerUserName,
            createdAt: moment(res.data.createdAt).format("DD-MM-YYYY HH:mm:ss"),
          });
          useProfileStore.getState().setSkinModel(res.data.skinModel);
          localStorage.setItem("token", res.data.accessToken);
          toast.update(toastId, {
            render: "Зарегистрирован",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        } catch (e) {
          toast.update(toastId, {
            render: e.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      },
      checkAuth: async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
            { withCredentials: true },
          );
          set({
            isAuth: true,
            username: res.data.username,
            createdAt: moment(res.data.createdAt).format("DD-MM-YYYY HH:mm:ss"),
          });
          useProfileStore.getState().setSkinModel(res.data.skinModel);
          localStorage.setItem("token", res.data.accessToken);
        } catch (e) {
          console.log(e);
        } finally {
          set({ isLoading: false });
        }
      },
      logout: async () => {
        const toastId = toast.loading("Выходим...");
        try {
          await AuthService.logout();
          localStorage.removeItem("token");
          set({ isAuth: false });
          toast.update(toastId, {
            render: "Выход",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        } catch (error) {
          toast.update(toastId, {
            render: "Произошла ошибка",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
          console.log(error);
        }
      },
      setUsername: (username) => {
        set({ username });
      },
      setPassword: (password) => {
        set({ password });
      },
      setRegisterUserName: (registerUserName) => {
        set({ registerUserName });
      },
      setRegisterPassword: (registerPassword) => {
        set({ registerPassword });
      },
      setRegisterRetryPassword: (registerRetryPassword) => {
        set({ registerRetryPassword });
      },
      setThemeColor: (themeColor) => {
        set({ themeColor });
      },
      setRToken: (rToken) => {
        set({ rToken });
      },
    }),
    {
      name: "user-data",
      partialize: (store) => ({
        themeColor: store.themeColor,
      }),
    },
  ),
);

export default useAuthStore;

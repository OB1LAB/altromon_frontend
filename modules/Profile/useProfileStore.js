import { create } from "zustand";
import { toast } from "react-toastify";
import SkinService from "@/services/SkinService";

const useProfileStore = create((set) => ({
  setSkin: async (event) => {
    if (!event || event.target.files.length === 0) {
      return false;
    }
    const formData = new FormData();
    formData.append("file", event.target.files[0], "skin");
    const toastId = toast.loading("Загружаем скин...");
    try {
      await SkinService.uploadSkin(formData);
      toast.update(toastId, {
        render: "Скин загружен",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      return true;
    } catch (e) {
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
    return false;
  },
  setCape: async (event) => {
    if (!event || event.target.files.length === 0) {
      return false;
    }
    const formData = new FormData();
    formData.append("file", event.target.files[0], "cape");
    const toastId = toast.loading("Загружаем скин...");
    try {
      await SkinService.uploadCape(formData);
      toast.update(toastId, {
        render: "Плащ загружен",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      return true;
    } catch (e) {
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
    return false;
  },
  deleteSkin: async () => {
    const toastId = toast.loading("Удаляем скин...");
    try {
      await SkinService.deleteSkin();
      toast.update(toastId, {
        render: "Скин удалён",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      return true;
    } catch (e) {
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
    return false;
  },
  deleteCape: async () => {
    const toastId = toast.loading("Удаляем плащ...");
    try {
      await SkinService.deleteCape();
      toast.update(toastId, {
        render: "Плащ удалён",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      return true;
    } catch (e) {
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
    return false;
  },
}));

export default useProfileStore;

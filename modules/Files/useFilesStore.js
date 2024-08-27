import { create } from "zustand";
import { toast } from "react-toastify";
import FilesService from "@/services/FilesService";

const useFilesStore = create((set, get) => ({
  files: [],
  currentDir: "./static",
  currentFolder: [],
  setCurrentDir: (currentDir) => {
    set({
      currentDir,
      currentFolder: currentDir
        .split("./static")[1]
        .split("/")
        .filter((item) => item.length > 0),
    });
  },
  getFiles: async () => {
    const toastId = toast.loading("Получаем данные...");
    try {
      const res = await FilesService.getFiles();
      set({ files: res.data });
      toast.update(toastId, {
        render: "Получено",
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
  uploadFile: async (event) => {
    if (!event || event.target.files.length === 0) {
      return false;
    }
    const formData = new FormData();
    formData.append("file", event.target.files[0], event.target.files[0].name);
    formData.append(
      "path",
      get().currentFolder.length === 0 ? "./" : get().currentFolder.join("/"),
    );
    const toastId = toast.loading("Загружаем файл...");
    try {
      await FilesService.uploadFile(formData);
      toast.update(toastId, {
        render: "Файл загружен",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      get().getFiles();
    } catch (e) {
      console.log(e);
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  },
  removeFile: async (path) => {
    const toastId = toast.loading("Удаляем...");
    try {
      await FilesService.deleteFile(path);
      toast.update(toastId, {
        render: "Успешно удалено",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      get().getFiles();
    } catch (e) {
      console.log(e);
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  },
}));

export default useFilesStore;

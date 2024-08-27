import $api from "@/services/http";
export default class FilesService {
  static getFiles() {
    return $api.get("/assembly/get");
  }
  static uploadFile(formData) {
    return $api.post("/assembly/upload", formData, {
      headers: { "content-type": "multipart/form-data" },
    });
  }
  static deleteFile(path) {
    return $api.post("/assembly/delete", { path });
  }
}

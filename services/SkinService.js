import $api from "@/services/http";

export default class SkinService {
  static uploadSkin(formData) {
    return $api.post("/skins/uploadSkin", formData, {
      headers: { "content-type": "multipart/form-data" },
    });
  }
  static uploadCape(formData) {
    return $api.post("/skins/uploadCape", formData, {
      headers: { "content-type": "multipart/form-data" },
    });
  }
  static changeSkinModel(skinModel) {
    return $api.post("/skins/changeTypeSkin", { skinModel });
  }
  static deleteSkin() {
    return $api.get("/skins/deleteSkin");
  }
  static deleteCape() {
    return $api.get("/skins/deleteCape");
  }
}

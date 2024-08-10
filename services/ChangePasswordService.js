import $api from "@/services/http";

export default class ChangePasswordService {
  static selfChange(password) {
    return $api.post("/auth/changePassword", { password });
  }
  static anotherChange(username, password) {
    return $api.post("/auth/adminChangePassword", { username, password });
  }
}

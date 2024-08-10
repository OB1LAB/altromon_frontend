import $api from "@/services/http";

export default class AuthService {
  static login(username, password) {
    return $api.post("/auth/login", { username, password });
  }
  static register(username, password, token) {
    return $api.post("/auth/register", { username, password, token });
  }
  static logout() {
    return $api.get("/auth/logout");
  }
}

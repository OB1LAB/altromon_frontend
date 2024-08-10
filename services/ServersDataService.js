import $api from "@/services/http";

export default class ServersDataService {
  static write(data) {
    return $api.post("/launcher/serversData", { data });
  }
  static read() {
    return $api.get("/launcher/serversData");
  }
}

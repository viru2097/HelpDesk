import axios from "axios";

const USER_REST_API = "http://localhost:8080/exHead";

class AdminService {
  postAdmin(admin) {
    return axios.post(`${USER_REST_API}/register`, admin).then(
      (response) => {
        console.log(response);
        console.log("success");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }
}
export default new AdminService();

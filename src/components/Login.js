import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const history = useHistory();
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const [user, setUser] = useState({
    emailId: "",
    password: "",
    loginType: "",
  });

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();

      if (user.emailId === "" || user.password === "") {
        swal("Oops!", "Please Fill Details!", "error");
        return;
      } else if (!regex.test(user.emailId)) {
        swal("Error", "Please Enter Valid Email Address!", "error");
        return;
      } else if (user.password.length < 6) {
        swal("!!", "Please Enter password with minimum 6 characters", "error");
      } else if (user.loginType === "") {
        swal("Error", "Please select a valid type");
      } else {
        if (user.loginType === "User") {
          userlogin(user);
        } else {
          adminlogin(user);
        }
      }
    },
    [user]
  );

  const adminlogin = useCallback(
    (data) => {
      axios
        .post(`http://localhost:8080/exHead/login`, data)
        .then((response) => {
          if (
            user.emailId !== response.data.emailId &&
            user.password !== response.data.password
          ) {
            swal("Error", "Wrong Login Credentials", "error");
          } else {
            swal("Success", " Admin Logged In Successfully!", "success");
            sessionStorage.setItem("Admin Data", JSON.stringify(response.data));
            history.push("/");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log("Something went wrong");
        });
    },
    [user]
  );
  const userlogin = useCallback(
    (data) => {
      axios
        .post(`http://localhost:8080/user/login`, data)
        .then((response) => {
          if (
            user.emailId !== response.data.emailId &&
            user.password !== response.data.password
          ) {
            swal("Error", "Wrong Login Credentials", "error");
          } else {
            swal("Success", " User Logged In Successfully!", "success");
            sessionStorage.setItem("User Data", JSON.stringify(response.data));
            history.push("/");
            window.location.reload();
          }
        })
        .catch((error) => {
          swal("Error", "Connection required", "error");
          console.warn("Something went wrong");
        });
    },
    [user]
  );
  return (
    <div class="col-8 offset-2 mt-3 text-light d-flex flex-column justify-content-center align-items-center">
      <div
        class=" card w-50 card border-info bg-info"
        style={{ width: "50rem" }}
      >
        <div
          class="card-body text-white d-flex flex-column justify-content-center align-items-center"
          style={{ width: "400" }}
        >
          <div className="App">
            <h1>Login</h1>
            <div>
              <form>
                <div class="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    class="form-control"
                    name="emailId"
                    placeholder="Enter email"
                    onChange={(e) =>
                      setUser({ ...user, emailId: e.target.value })
                    }
                  />
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>

                <div>
                  <select
                    class="custom-select"
                    onChange={(e) =>
                      setUser({ ...user, loginType: e.target.value })
                    }
                    selected={user.loginType}
                  >
                    <option disabled="disabled" selected>
                      Open this select menu{" "}
                    </option>
                    <option>User</option>
                    <option>Admin</option>
                  </select>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary mt-3"
                  onClick={handleLogin}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

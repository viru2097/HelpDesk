import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import '../footer.css';
import "../Main.css";


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
            history.push("/home");
            window.location.reload();
          }
        })
        .catch((error) => {
          swal("Error", "Connection required", "error");
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
            history.push("/home");
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
    <div class="col-12  mt-3 text-light d-flex flex-column justify-content-center align-items-center">
      <div
        class=" card w-50 card border-info"
        style={{ width: "50rem" ,background:"#374785"}}
        
      >
        <div
          class="card-body text-white d-flex flex-column justify-content-center align-items-center"
          style={{ width: "400" }}
        >
          <div className="App">
            <h1><b>Login</b></h1>
              <br/>
              
            <div>
              <form>
                <div class="form-group">
                  <label><b>Email ID</b></label>
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
                  <label><b>Password</b></label>
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
                  <select class="custom-select" onChange={(e) => setUser({...user, loginType:e.target.value})} selected={user.loginType}>
                    <option disabled="disabled" selected>
                      Open this select menu
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

      <div class="col-12 row" style={{ color: "black" }}>
        <div class="line mb-3 mx-auto"></div>
        <div class="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
          <div class="p-2 flex-fill bd-highlight mb-5 mb-md-0">
            <h3>
              <b>COMMUNAL HELP DESK</b>
            </h3>{" "}
            <small>
              <b>Copyright @Communal Help desk 2021</b>
            </small>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
            <h5 class="places">
              <b>Address</b>
            </h5>
            <p class="mb-0">"HELP DESK",Pride Icon,</p>
            <p class="mb-0">Office No15,Kharghar</p>
            <p class="mb-0">Navi Mumbai,Maharashtra</p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
            <h5 class="places">
              <b>About Company</b>
            </h5>
            <p class="mb-0">We at help desk provide help</p>
            <p class="mb-0">desk for all queries </p>
            <p class="mb-0">of common people.</p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
            <h5 class="places">
              <b>What we do</b>
            </h5>
            <p class="mb-0">
              We help people across the nation to resolve their{" "}
            </p>
            <p class="mb-0">
              complaints actively along with our communal team.
            </p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
            <h5 class="places">
              <b>Get in Touch</b>
            </h5>
            <p class="mb-0">communalhelpdesk@gmail.com</p>
            <p class="mb-0">+91 9130799624</p>
            <p class="mb-0"></p>
          </div>
          <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
            <h5 class="places"></h5>
            <p class="mb-0"></p>
          </div>
        </div>
        <div class="line mb-3 mx-auto"></div>
      </div>
      <div class="row bottom-part" style={{ color: "black" }}>
        <div class="d-lg-flex justify-content-between bd-highlight col-12 mb-5 px-5">
          <div class="p-2 align-self-center flex-fill bd-highlight">
            <div class="fa fa-facebook px-5"></div>
            <div class="fa fa-linkedin px-5"></div>
            <div class="fa fa-twitter px-5"></div>
            <div class="fa fa-instagram px-5"></div>
          </div>
          <div class="p-2 row flex-fill bd-highlight justify-content-left">
            <div class="p-2 d-lg-flex">
              <div class="p-2  flex-fill d-flex bd-highlight">
                <a href="/Home">
                  <b>Home</b>
                </a>
              </div>
              <div class="p-2 flex-fill d-flex bd-highlight">
                <a href="/About">
                  <b>About Us</b>
                </a>
              </div>
              <div class="p-2 flex-fill d-flex bd-highlight">
                <a href="/Services">
                  <b>Services</b>
                </a>
              </div>
              <div class="p-2 flex-fill d-flex bd-highlight">
                <a href="/Complaints">
                  <b>Complaints</b>
                </a>
              </div>
              <div class="p-2 flex-fill d-flex bd-highlight">
                <a href="/Contact Us">
                  <b>Contact Us</b>
                </a>
              </div>
              <div class="p-2 flex-fill d-flex bd-highlight">
                <a href="/Feedback">
                  <b>Feedback</b>
                </a>
              </div>
            </div>
          </div>

          <div class="p-2 align-self-center flex-fill bd-highlight">
            <div class="fa fa-envelope-o px-2 black-text">
              &nbsp;&nbsp;<b>info@helpdesk.in</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

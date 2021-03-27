import "../Main.css";
import swal from "sweetalert";
import React, { useState } from "react";
import AdminService from "../services/AdminService";
import "../footer.css";
const AdminRegister = () => {
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const [user, setUser] = useState({
    emailId: "",
    username: "",
    password: "",
    deptName: "",
    confirmPassword: "",
  });

  const adminRegister = (e) => {
    e.preventDefault();
    if (
      user.emailId === "" ||
      user.username === "" ||
      user.password === "" ||
      user.deptName === ""
    ) {
      swal("Oops!", "Please Fill Details!", "error");
    } else if (!regex.test(user.emailId)) {
      swal("Error!", "Please Enter Valid Email Address", "error");
    } else if (user.password.length < 6) {
      swal("!!", "Please Enter password with minimum 6 characters");
    } else if (user.password != user.confirmPassword) {
      swal("Error", "Password Dont Match", "error");
    } else {
      AdminService.postAdmin(user);
      setUser({
        emailId: "",
        password: "",
        username: "",
        deptName: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        swal("Success!", "Admin Registered successfully!", "success");
      }, 500);
    }
  };
  return (
    <div class="col-12  mt-3 text-light d-flex flex-column justify-content-center align-items-center">
      <div
        class=" card w-50 card border-info"
        style={{ width: "50rem", background: "#374785" }}
      >
        <div
          class="card-body text-white d-flex flex-column justify-content-center align-items-center"
          style={{ width: "400" }}
        >
          <div className="App">
            <h1>
              <b>Admin Registration Form</b>
            </h1>
            <br />

            <div>
              <form>
                <div class="form-group">
                  <label>
                    <b>Email ID</b>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    name="emailId"
                    placeholder="Enter email"
                    value={user.emailId}
                    onChange={(e) =>
                      setUser({ ...user, emailId: e.target.value })
                    }
                  />
                </div>

                <div class="form-group">
                  <label class="label">Department Name</label>
                  <div class="rs-select2 js-select-simple select--no-search">
                    <select
                      class="custom-select custom-select-lg  input--style-4"
                      style={{ width: "100%" }}
                      onChange={(e) =>
                        setUser({ ...user, deptName: e.target.value })
                      }
                      selected={user.deptName}
                    >
                      <option disabled="disabled" selected="selected">
                        Choose option
                      </option>
                      <option>General Suggestions</option>

                      <option>Unethical Issues</option>
                      <option>Social Issues</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="label"> Username</label>
                  <input
                    class="input--style-4"
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </div>

                <div class="form-group">
                  <label>
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>

                <div class="form-group">
                  <label>
                    <b>Confirm Password</b>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="confirmPassword"
                    placeholder="Enter Password"
                    value={user.confirmPassword}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                  />
                </div>

                <button
                  class="btn btn-primary mr-2"
                  type="submit"
                  onClick={adminRegister}
                >
                  Register
                </button>
                <button class="btn btn-primary" type="reset">
                  Cancel
                </button>
                <div class="d-flex justify-content-center text-danger">
                  <a href="./Login" class="btn btn-link text-danger ">
                    <b>Sign In Here...</b>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="line mb-3 mx-auto"></div>
        <div class="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3 text-dark">
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
      <div class="row bottom-part">
        <div class="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5 text-dark">
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
};

export default AdminRegister;

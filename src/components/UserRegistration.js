import "bootstrap/dist/css/bootstrap.css";
import "../Main.css";
import UserService from "../services/UserService";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";

function Register() {
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1 = /^([a-zA-Z])+$/;
  const regex2 = /^([0-9])+$/;
  const aadharRegex = /^([2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4})+$/;

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    emailId: "",
    password: "",
    mobileNo: "",
    aadharCard: "",
    address: "",
    confirmPassword: "",
  });

  const registerUser = (e) => {
    e.preventDefault();

    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.emailId === "" ||
      user.password === "" ||
      user.mobileNo === "" ||
      user.aadharCard === "" ||
      user.address === ""
    ) {
      swal("Oops!", "Please Fill Details!", "error");
    } else if (!regex1.test(user.firstName)) {
      swal("Error!", "Please Enter Valid name", "error");
    } else if (!regex1.test(user.lastName)) {
      swal("Error!", "Please Enter Valid Lastname", "error");
    } else if (!regex.test(user.emailId)) {
      swal("Error!", "Please Enter Valid Email Address", "error");
    } else if (user.password.length < 6) {
      swal(
        "Error!",
        "Please Enter password with minimum 6 characters",
        "error"
      );
    } else if (user.password !== user.confirmPassword) {
      swal("Error", "Password Dont Match", "error");
    } else if (!regex2.test(user.mobileNo) || user.mobileNo.length < 10) {
      swal("Error!!", "Enter Valid Mobile No", "error");
    } else if (
      !aadharRegex.test(user.aadharCard) ||
      user.aadharCard.length < 12
    ) {
      swal("Error!!", "Please Enter valid UID", "error");
    } else {
      UserService.postUser(user);
      setUser({
        firstName: "",
        lastName: "",
        userName: "",
        emailId: "",
        password: "",
        mobileNo: "",
        aadharCard: "",
        address: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        swal("Success!", "Registered successfully!", "success");
      }, 500);
    }
  };

  return (
    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div class="wrapper wrapper--w680 bg bg-primary  ">
        <div class="card card-4 ">
          <div class="card-body ">
            <h2 class="title">User Registration Form</h2>
            <form>
              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group mb-3">
                    <label class="label">first name</label>
                    <input
                      class="input--style-4"
                      value={user.firstName}
                      type="text"
                      name="firstName"
                      onChange={(e) =>
                        setUser({ ...user, firstName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">last name</label>
                    <input
                      class="input--style-4"
                      type="text"
                      value={user.lastName}
                      name="lastName"
                      onChange={(e) =>
                        setUser({ ...user, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-12">
                  <div class="input-group">
                    <label class="label mr-4">Address</label>
                    <textarea
                      class="input--style-4 border border-white"
                      cols="50"
                      value={user.address}
                      style={{ height: "100px" }}
                      onChange={(e) =>
                        setUser({ ...user, address: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>

                <div class="row row-space">
                  <div class="col-6">
                    <div class="input-group">
                      <label class="label">Email</label>
                      <input
                        class="input--style-4"
                        value={user.emailId}
                        type="email"
                        name="emailId"
                        onChange={(e) =>
                          setUser({ ...user, emailId: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-group">
                      <label class="label">Phone Number</label>
                      <input
                        class="input--style-4"
                        type="text"
                        name="mobileNo"
                        value={user.mobileNo}
                        onChange={(e) =>
                          setUser({ ...user, mobileNo: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Aadhar Number</label>
                    <input
                      class="input--style-4"
                      value={user.aadharCard}
                      type="text"
                      name="aadharCard"
                      onChange={(e) =>
                        setUser({ ...user, aadharCard: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group">
                    <label class="label"> Username</label>
                    <input
                      class="input--style-4"
                      type="text"
                      value={user.userName}
                      name="userName"
                      onChange={(e) =>
                        setUser({ ...user, userName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <label class="label"> Password</label>
                    <input
                      class="input--style-4"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <label class="label">Confirm Password</label>
                  <input
                    class="input--style-4"
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                  />
                </div>
              </div>

              <div class="d-flex justify-content-center">
                <button
                  class="btn btn-primary mr-2"
                  type="submit"
                  onClick={registerUser}
                >
                  Register
                </button>

                <button class="btn btn-primary" type="reset">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;

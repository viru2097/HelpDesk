import "bootstrap/dist/css/bootstrap.css";
import "../Main.css";
import UserService from "../services/UserService";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { Description } from "@material-ui/icons";

function UserReg() {
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1 = /^([a-zA-Z])+$/;
  const regex2 = /^([0-9])/;
  //const regex3=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s[0-9]{4}$/;

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
    console.log(user);

    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.userName === "" ||
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
      swal(
        "Error!!",
        "Please Enter mobileNo with minimum 10 characters",
        "error"
      );
    } else if (user.aadharCard.length < 12) {
      swal(
        "Error!!",
        "Please Enter UID Number with minimum 12 characters",
        "error"
      );
    } else {
      console.log(user);
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
    <div
      class="container-fluid  d-inline-block justify-content-center  align-items-center"
      style={{ width: "80%", paddingLeft: "20%" }}
    >
      <center>
        <form
          class="well form-horizontal"
          id="contact_form"
          style={{
            background: "gray",
            color: "black",
            padding: "45px",
            margin: "70px",
          }}
        >
          <fieldset>
            <legend>
              <center>
                <h2>
                  <b>Registration Form</b>
                </h2>
              </center>
            </legend>
            <br />

            <div class="form-group">
              <label class="col-md-6 control-label">FirstName</label>
              <div class="col-md-6 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    name="firstName"
                    placeholder="Last Name"
                    class="form-control"
                    type="text"
                    value={user.firstName}
                    onChange={(e) =>
                      setUser({ ...user, firstName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-6 control-label">Last Name</label>
              <div class="col-md-6 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    class="form-control"
                    type="text"
                    value={user.lastName}
                    onChange={(e) =>
                      setUser({ ...user, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-6  control-label">Username</label>
              <div class="col-md-6  inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    name="userName"
                    placeholder="Username"
                    class="form-control"
                    type="text"
                    value={user.userName}
                    onChange={(e) =>
                      setUser({ ...user, userName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-6  control-label">Password</label>
              <div class="col-md-6  inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    name="password"
                    placeholder="Password"
                    class="form-control"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-6  control-label">Confirm Password</label>
              <div class="col-md-6  inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    class="form-control"
                    type="password"
                    value={user.confirmPassword}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-6  control-label">E-Mail</label>
              <div class="col-md-6  inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-envelope"></i>
                  </span>
                  <input
                    name="emailId"
                    placeholder="E-Mail Address"
                    class="form-control"
                    type="text"
                    value={user.emailId}
                    onChange={(e) =>
                      setUser({ ...user, emailId: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-6">
                <label class="label mr-4">Address</label>
                <div class="input-group">
                  <textarea
                    class="input--style-4 border border-white"
                    cols="80"
                    value={user.address}
                    style={{ height: "100px" }}
                    onChange={(e) =>
                      setUser({ ...user, address: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
            </div>
            <br />

            <div class="form-group">
              <label class="col-md-6 control-label">Contact No.</label>
              <div class="col-md-6 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-earphone"></i>
                  </span>
                  <input
                    name="mobileNo"
                    placeholder="(639)"
                    class="form-control"
                    type="text"
                    value={user.mobileNo}
                    onChange={(e) =>
                      setUser({ ...user, mobileNo: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-6 control-label">Aadhar Card</label>
              <div class="col-md-6 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-earphone"></i>
                  </span>
                  <input
                    name=" aadharCard"
                    placeholder="(639)"
                    class="form-control"
                    type="text"
                    value={user.aadharCard}
                    onChange={(e) =>
                      setUser({ ...user, aadharCard: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="form-group-lg">
              <label class="col-md-6 control-label"></label>
              <div class=" col-md-6 ">
                <br />
                <center>
                  <button type="submit" class="btn btn-success w-450 h-450 ">
                    SUBMIT <span class="glyphicon glyphicon-send"></span>
                  </button>
                </center>
              </div>
            </div>
          </fieldset>
        </form>
      </center>
    </div>
  );
}

export default UserReg;

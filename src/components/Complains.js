import "bootstrap/dist/css/bootstrap.css";

import "../Main.css";
import React, { useState, useEffect, useCallback } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Moment from "moment";
import DatePicker from "react-date-picker";

function Complains() {
  const history = useHistory();
  if (sessionStorage.getItem("User Data") === null) 
  {
    setTimeout(() => {
      swal("!!", "Please Login First", "error");
    }, 500);
    
    history.push("/login");
    window.location.reload();
   
  }

  const [complain, setComplain] = useState({
    date: Moment(new Date()).format("YYYY-MM-DD"),
    type: null,
    priority: "",
    address: "",
    description: "",
    userId: 0,
    file: File,
  });
  
  useEffect(() => {
    checkdata();
  }, []);


  const registerComplaint = useCallback(
    (e) => {
      e.preventDefault();
      if (
        complain.date === "" ||
        complain.type === "" ||
        complain.priority === "" ||
        complain.address === "" ||
        complain.description === ""
      ) {
        swal("Oops!", "Please Fill Details!", "error");
      } else {
        postlogineonServer(complain);
        
      }
    },
    [complain]
  );

  const checkdata = () => {
    let variable2 = sessionStorage.getItem("User Data");
    variable2 = JSON.parse(variable2);
    setComplain({ ...complain, userId: variable2.id });
  };
  const postlogineonServer = (data) => {
    const formData = new FormData();
    formData.append("date", data.date);
    formData.append("type", data.type);
    formData.append("priority", data.priority);
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("userId", data.userId);
    formData.append("file", data.file);

    axios({
      url: "http://localhost:8080/complain/register",
      method: "post",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        if (response) {
          swal("Success", "Complain Registered Sucessfully", "success");
          window.location.reload();
        } else {
          swal("Oops!", "Complain Register Failed", "error");
        }
      })
      .catch((error) => {
        swal("Error", "Connection Required", "error");
        console.warn("Something went wrong");
      });

    setComplain({
      date: "",
      type: null,
      priority: "",
      address: "",
      description: "",
      userId: 0,
    });
  };
  return (
    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div class="wrapper wrapper--w680 bg bg-primary  ">
        <div class="card card-4 ">
          <div class="card-body "style={{background:"#374785"}}>
            <h2 class="title">Complaint Registration Form</h2>
            <form>
              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group">
                    <label class="label" htmlFor="cDate">
                      Complaint Register Date
                    </label>
                    <div>
                      <DatePicker
                        className="input--style-4 js-date-picker"
                        clearIcon
                        value={new Date()}
                        minDate={new Date()}
                        maxDate={new Date()}
                        format="yyyy-MM-dd"
                      />

                      <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Select Complaint Type</label>

                    <div class="rs-select2 js-select-simple select--no-search">
                      <select
                        class="custom-select custom-select-lg  input--style-4"
                        style={{ width: "100%" }}
                        onChange={(e) =>
                          setComplain({ ...complain, type: e.target.value })
                        }
                        selected={complain.type}
                      >
                        <option disabled="disabled" selected="selected">
                          Choose option
                        </option>
                        <option value="3">General Suggestions</option>

                        <option value="2">Unethical Issues</option>
                        <option value="1">Social Issues</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Select Priority</label>
                    <select
                      class="custom-select custom-select-lg rs-select2 js-select-simple select--no-search input--style-4"
                      style={{ width: "100%" }}
                      onChange={(e) =>
                        setComplain({ ...complain, priority: e.target.value })
                      }
                    >
                      <option disabled="disabled" selected="selected">
                        Choose option
                      </option>
                      <option value="General">General</option>
                      <option value="High">High</option>
                      <option value="Moderate">Moderate</option>
                    </select>
                  </div>
                </div>

                <div class="col-6">
                  <label class="label">Upload Attachment</label>
                  <div class="input-group">
                    <input
                      type="file"
                      onChange={(e) =>
                        setComplain({ ...complain, file: e.target.files[0] })
                      }
                    />
                  </div>
                </div>
              </div>

              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group">
                    <label class="label mr-4">Address</label>
                    <textarea
                      class="input--style-4 border border-white"
                      cols="50"
                      style={{ height: "100px" }}
                      value={complain.address}
                      onChange={(e) =>
                        setComplain({ ...complain, address: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>

                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Description</label>
                    <textarea
                      class="input--style-4 border border-white"
                      cols="50"
                      style={{ height: "100px" }}
                      value={complain.description}
                      onChange={(e) =>
                        setComplain({
                          ...complain,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>

             
              {/* <input type="checkBox" onChange={checkdata} /> */}
              <div class="d-flex justify-content-center">
                <button
                  class="btn btn-primary mr-2"
                  type="submit"
                  onClick={registerComplaint}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
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
      <div class="row bottom-part">
        <div class="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5">
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

export default Complains;

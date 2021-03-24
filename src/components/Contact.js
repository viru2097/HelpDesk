import React, { useState } from "react";
import Data from "./Data";
import "../footer.css";
import "../Main.css";
import swal from "sweetalert";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message:""
  });

  const formSubmit = (e) => {
    e.preventDefault();
    if (data.fullname === "" || data.email === "" || data.message==="") {
      swal("Error", "Please Fill Data", "error");
    } else {
      swal("Success", "We will update to you soon", "success");
      setData({
        fullname:"",
        email:"",
        message:""
      });
    }
  };
  return (
    <div className="container-fluid">
      <div class="col-12  mt-3 text-light d-flex flex-column justify-content-center align-items-center">
        <div
          class=" card w-75  card border-info "
          style={{ width: "50rem", background: "#374785" }}
        >
          <div
            class="card-body text-white d-flex flex-column justify-content-center align-items-center"
            style={{ width: "400" }}
          >
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>
                    <b>
                      <strong>Leave a Reply</strong>
                    </b>
                  </label>
                </div>
                <br></br>
                <div className="form-group">
                  <label>
                    <b>Your email address wont be published</b>
                  </label>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    type="text"
                    cols="7"
                    rows="8"
                    className="form-control"
                    value={data.message}
                    placeholder="Message"
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={data.fullname}
                    onChange={(e) =>
                      setData({ ...data, fullname: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                   
                  />
                </div>
                <p className="text-center mb-6">
                  <input
                    type="submit"
                    onClick={formSubmit}
                    className="btn btn-secondary bg-gray w-150"
                    value="Post Comment"
                  />
                </p>
              </form>
            </div>
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
};

export default Contact;

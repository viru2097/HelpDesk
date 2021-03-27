import React from "react";
// import Commons from './Commons';
import "bootstrap/dist/css/bootstrap.css";

import "../App.css";
import helpDesk from "../images/helpDesk.jpeg";
import "../footer.css";

const About = () => {
  return (
    <div class="container-fluid bg-grey">
      <div class="row">
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-hand-right logo slideanim"></span>
          <img
            src={helpDesk}
            class="img-fluid "
            style={{
              margin: "15px",
              padding: "65px",
              width: "560px",
              height: "550px",
            }}
          />
        </div>

        <div className="col-sm-8 d-flex justify-content-center align-items-center ">
          <h5>
            <div style={{ color: "red" }}>
              <h1>
                <b>What We Do</b>
              </h1>
              <h2>
                <b>Together We Can!</b>
              </h2>
            </div>
            <div>
              <i>
                <q>Communal Help Desk</q>
              </i>{" "}
              Management system is web application and one touch solution that
              provides interface through which a user/person can raise a
              complaint against general /social/unethical issues that are
              happening in their surrounding to a Main Admin (government
              officer).
            </div>
            <div> </div>
            <div>
              Many a times it is observed that many complaints/queries raised by
              people are and ounot been addressed instantly. So{" "}
              <i>
                <q>Communal Help Desk</q>
              </i>
              will provides facility for reporting online issues related to
              public services, general and unethical issues which can be
              addressed and resolved by instantly.{" "}
            </div>
            <div>
              Any Number of users can connect to the server. Each user first
              makes their login to sever and register a complaint/issues to show
              their availability. Admin assigns that issues to the government
              officer depending on criteria (admin). The server can be any Web
              Server. In this application we can easily track all the complaint
              details, criminal details, FIR Details etc. online.
            </div>
            <div>
              So <i>TechAid</i> is a resource intended to provide the customer
              or end user with relevant information asked or to resolve the
              complaints registered by them. Also you can drop in your valuable
              suggestion so that we can work on them as well. Our team is
              actively working to resolve customer complaints.{" "}
            </div>
          </h5>
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

export default About;

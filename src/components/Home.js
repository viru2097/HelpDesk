import React from "react";
import Commons from "./Commons";
import One from "../images/One2.jpeg";
import Three from "../images/Three.jpg";
import { Carousel } from "react-bootstrap";
import Two from "../images/Two.png";
import web1 from "../images/Desk1.png";
import Carousel3 from "../images/Carousel3.jpg";
import Four from "../images/Four.jpeg";
import "../footer.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <br></br>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={One}
            alt="First slide"
            style={{ height: "500px", width: "75%" }}
          />
          <Carousel.Caption style={{ color: "Red" }}></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Three}
            alt="Second slide"
            style={{ height: "500px", width: "75%" }}
          />

          <Carousel.Caption style={{ color: "red" }}></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Two}
            alt="Third slide"
            style={{ height: "500px", width: "75%" }}
          />

          <Carousel.Caption style={{ color: "red" }}></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel3}
            alt="Fourth Slide"
            style={{ height: "500px", width: "75%" }}
          />

          <Carousel.Caption style={{ color: "red" }}></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Four}
            alt="Fifth Slide"
            style={{ height: "500px", width: "75%" }}
          />

          <Carousel.Caption style={{ color: "red" }}></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="col-12 container">
        <Commons imgsrc={web1} visit="/Home" btname="Contact now"></Commons>
      </div>
      <div
        class="col-12 container justify-content-center align-items-center m-50"
        style={{ marginTop: "10px", width: "98%" }}
      >
        <div class="row justify-content-center top-part">
          <div class="col--3 text-center center-content">
            <div class="d-flex justify-content-center align-items-center p-20">
              <h2 class="footer-heading">
                <b>Connect To Communal HelpDesk Team</b>
              </h2>
            </div>
            <br /> <br />
            <div class="d-flex-inline">
              <h4>
                You can register your complaint related to any unethical issues
                here and we will get back to you soon. <br /> You can also
                contact on the helpline number given below.
              </h4>
            </div>
            <a href="./Complains">
              <div class="d-flex-inline ">
                {" "}
                <button class="btn  btn-primary m-5 p-2">
                  <b>Register complaint</b>
                </button>{" "}
              </div>
            </a>
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
          <div
            class="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5"
            style={{ color: "black" }}
          >
            <div class="p-2 align-self-center flex-fill bd-highlight">
              <div class="fa fa-facebook px-3"></div>
              <div class="fa fa-linkedin px-3"></div>
              <div class="fa fa-twitter px-3"></div>
              <div class="fa fa-instagram px-3"></div>
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
    </div>
  );
};

export default Home;

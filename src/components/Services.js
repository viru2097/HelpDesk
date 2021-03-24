import React from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.css";
import { IoIosTabletPortrait } from "react-icons/io";
import { MdBusiness, MdSms } from "react-icons/md";
import { RiRegisteredFill, RiTrainWifiLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import "../footer.css";

import Image2 from "../images/Image2.jpeg";
import Image4 from "../images/Image4.jpeg";
import Imgg from "../images/Imgg.jpeg";
import hd8 from "../images/hd8.jpeg";
import Image3 from "../images/Image3.jpeg";
import Carousel1 from "../images/Carousel1.jpg";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "A glimpse of what we offer",
    text: "",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <IoIosTabletPortrait className="commonIcons" />,
      heading: "Social Concerns/Communal Aspects",
      text:
        "Social issues is problem that influences any individual within a society.We at communal help desk try to  solve any kind of issues related to education,environmental racism and others. ",
    },
    {
      id: 2,
      icon: <MdSms className="commonIcons" />,
      heading: "Matter of Convention",
      text:
        "Even though we are living in 21st century ,there still exists many issues that need to be addressed.To help them communal help desk is putting forward a helping hand for people in need. So here we have come up with a online platform to serve you instantly.",
    },
    {
      id: 3,
      icon: <RiTrainWifiLine className="commonIcons" />,
      heading: "Causes and Solutions to Water Crises",
      text:
        "While Solving water crisis we create awareness among  citizens and ask them to take part in proper conservation, stopping water mis-usage, and eliminating usage of bottled water etc. Kindly call us to know more about it.",
    },
    {
      id: 4,
      icon: <MdBusiness className="commonIcons" />,
      heading: "Women Safety Measures",
      text:
        "Women safety is definitely one of the growing concerns in our country.We provide help and support to all queries related to it as well. We keep your data confidential .",
    },
    {
      id: 5,
      icon: <FaQuestion className="commonIcons" />,
      heading: "Socio-cultural Issues ",
      text:
        "Some of the important socio-cultural issues that  need to be addressed today are casteism, dowry, drug addiction,etc.If you find any such incident happening around you then you can reach out to us.",
    },
    {
      id: 6,
      icon: <RiRegisteredFill className="commonIcons" />,
      heading: "Want to Know More? ",
      text:
        "Being a responsible citizen of nation,we should always take a step ahead to resolve problems around us.For any queries you can drop in a message and one of our representative will get in touch with you.",
    },
  ]);
  return (
    <div class="container-fluid">
      <div className="services__header">
        <div className="common">
          <h1 className="heading">
            <b>{header.mainHeader}</b>
          </h1>
          <h4 className="mainHeader">
            <b>{header.subHeading}</b>
          </h4>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
      </div>
      {/* /* First row */}
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mt-45 pt-150 d-flex justify-content-center align-items-center">
        <div class="col mb-6">
          <div class="card">
            <img
              src={Image2}
              class="card-img-top"
              alt="..."
              style={{ height: "200px" }}
            />

            <div class="card-body">
              <h5 class="card-title">
                <b>Communal Aspects</b>
              </h5>
              <p class="card-text">
                Social issues is problem that influences any individual within a
                society.We at communal help desk try to solve any kind of issues
                related to education,environmental racism and others.
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-6">
          <div class="card">
            <img
              src={Image4}
              class="card-img-top"
              alt="..."
              style={{ height: "140px" }}
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Matter of Convention</b>
              </h5>
              <p class="card-text">
                Even though we are living in 21st century ,there still exists
                many issues that need to be addressed.To help them communal help
                desk is putting forward a helping hand for people in need. So
                here we have come up with a online platform to serve you
                instantly.
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-6">
          <div class="card">
            <img
              src={hd8}
              class="card-img-top"
              alt="..."
              style={{ height: "140px" }}
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Causes and Solutions to Water Crises</b>
              </h5>
              <p class="card-text">
                While Solving water crisis we create awareness among citizens
                and ask them to take part in proper conservation, stopping water
                mis-usage, and eliminating usage of bottled water etc. Kindly
                call us to know more about it.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /*second row  */}
      <br />
      <br /> <br />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mt-45 pt-150 d-flex justify-content-center align-items-center">
        <div class="col mb-6">
          <div class="card">
            <img
              src={Image3}
              class="card-img-top"
              alt="..."
              style={{ height: "200px" }}
            />
            <br />
            <div class="card-body">
              <h5 class="card-title">
                <b>Women Safety Measures</b>
              </h5>
              <p class="card-text">
                Women safety is definitely one of the growing concerns in our
                country.We provide help and support to all queries related to it
                as well. We keep your data confidential .
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-6">
          <div class="card">
            <img
              src={Carousel1}
              class="card-img-top"
              alt="..."
              style={{ height: "230px" }}
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Socio-cultural Issues </b>
              </h5>
              <p class="card-text">
                Some of the important socio-cultural issues that need to be
                addressed today are casteism, dowry, drug addiction,etc.If you
                find any such incident happening around you then you can reach
                out to us.
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-6">
          <div class="card">
            <img
              src={Imgg}
              class="card-img-top"
              alt="..."
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Want to Know More? </b>
              </h5>
              <p class="card-text">
                Being a responsible citizen of nation,we should always take a
                step ahead to resolve problems around us.For any queries you can
                drop in a message and one of our representative will get in
                touch with you.
              </p>
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

export default Services;

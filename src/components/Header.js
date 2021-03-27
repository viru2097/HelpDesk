import React from "react";
import { IoIosTabletPortrait } from "react-icons/io";
import { MdBusiness, MdSms } from "react-icons/md";
import { RiRegisteredFill, RiTrainWifiLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";

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
      heading: "MOBILE TICKETING SERVICES",
      text:
        "An Un-Reserved Ticket through Mobile Application (UTS app) \
         has been started from 27 Dec, 2014 from Mumbai Suburban area.",
    },
    {
      id: 2,
      icon: <MdSms className="commonIcons" />,
      heading: "SMS Services",
      text:
        "Now all the enquiries like Train Alert, PNR Status, Train Status, Seat Availability, Train Schedule, \
        etc. are available on your mobile through SMS facility.",
    },
    {
      id: 3,
      icon: <RiTrainWifiLine className="commonIcons" />,
      heading: "National Train Enquiry System",
      text:
        "Here you can track status of any train across the nation. You can also track the \
         live station status of the same. So overall national train enquiry can be done.",
    },
    {
      id: 4,
      icon: <MdBusiness className="commonIcons" />,
      heading: "Freight Business",
      text: "Dedicated 24x7 to serve the logistics needs of the country",
    },
    {
      id: 5,
      icon: <FaQuestion className="commonIcons" />,
      heading: "Other Enquiry",
      text:
        "You can enquire fare of your journey ,seat availability etc simply by one button click.",
    },
    {
      id: 6,
      icon: <RiRegisteredFill className="commonIcons" />,
      heading: "Registration of Train/Coach ",
      text: "FTR registration can be done maximum 6 months in advance .",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

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
      heading: "SOCIAL ISSUES",
      text:
        "A Set of social Issues which inlucdes Water and Drainage Problem And Garabage Waste Dumps.",
    },
    {
      id: 2,
      icon: <MdSms className="commonIcons" />,
      heading: "GENERAL ISSUES",
      text:
        "General Issues includes A Bar near A school which is kind of an unethical act  .",
    },
    {
      id: 3,
      icon: <RiTrainWifiLine className="commonIcons" />,
      heading: "Other Issues",
      text:
        "User can suggest some issues or suggestions based on their area like eg. people need benches,for the old people etc stuff",
    },
    {
      id: 4,
      icon: <MdBusiness className="commonIcons" />,
      heading: "Women Safety Measurements",
      text: "Dedicated 24x7 to serve the women safety needs of the society",
    },
    {
      id: 5,
      icon: <FaQuestion className="commonIcons" />,
      heading: "Other Enquiry",
      text:
        "You can enquire about general awareness simply by one button click.",
    },
    {
      id: 6,
      icon: <RiRegisteredFill className="commonIcons" />,
      heading: "Issue Solving Ability  ",
      text: "Quick Resolution of issue can be done maximum in 2 weeks .",
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

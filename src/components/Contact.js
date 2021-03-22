import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert("We will report to you very soon");
  };
  return (
    <div className="container-fluid">
      <div class="col-8 offset-2 mt-3 text-light d-flex flex-column justify-content-center align-items-center">
        <div
          class=" card w-50  card border-info bg-info"
          style={{ width: "80rem" }}
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
                    cols="5"
                    rows="8"
                    className="form-control"
                    placeholder="Message"
                    onChange={inputEvent}
                    required="required"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="fullname"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={inputEvent}
                    value={data.fullname}
                    required="required"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={data.email}
                    onChange={inputEvent}
                    required="required"
                  />
                </div>
                <p className="text-center mb-0">
                  <input
                    type="submit"
                    onClick={formSubmit}
                    className="btn btn-secondary w-100"
                    value="Post Comment"
                  />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

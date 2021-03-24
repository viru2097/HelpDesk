import { green } from "@material-ui/core/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Examplemodal from "./Examplemodal";

function MyComplain() {
  const [complain, setComplain] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    checkdata();
  }, []);

  const checkdata = () => {
    let variable2 = sessionStorage.getItem("User Data");
    variable2 = JSON.parse(variable2);
    setComplain({ ...complain, userId: variable2.id });
    postlogineonServer({ userId: variable2.id });
  };

  const postlogineonServer = (data) => {
    axios
      .post(`http://localhost:8080/complain/userComplaint`, data)
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.warn("Something went wrong");
      });
  };
  return (
    <div className="table-responsive" >
      <br></br>
      <h1 className="text-center"> Complains List</h1>
      {tableData.length > 0 ? (
        <table className="table table-striped  " style={{ color: "black" }}>
          <thead>
            <tr>
              <td>Id</td>
              <td> Date</td>
              <td>Type</td>
              <td> Priority</td>
              <td> Address</td>
              <td>Description</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((item) => {
                if (item.type === 3) var departmentName = "General Sugesstions";
                else if (item.type === 2) departmentName = "Unethical Issues";
                else departmentName = "Social Issues";
                return (
                  <tr>
                    <td>{item.complaint_ID}</td>
                    <td>{item.date}</td>
                    <td> {departmentName}</td>
                    <td> {item.priority}</td>
                    <td> {item.address}</td>
                    <td> {item.description}</td>
                    <td>
                      <Examplemodal itemData={item} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div>
          <h2>No Complaints Registered</h2>
        </div>
      )}
    </div>
  );
}

export default MyComplain;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Adminmodal from "./AdminModal";

function AdminComplains() {
  const [adminComplain, setAdminComplain] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    checkdata();
  }, []);

  const checkdata = () => {
    let variable2 = sessionStorage.getItem("Admin Data");
    variable2 = JSON.parse(variable2);
    setAdminComplain({ ...adminComplain, type: variable2.type });
    postlogineonServer({ type: variable2.type });
  };

  const postlogineonServer = (data) => {
    axios
      .post(`http://localhost:8080/exHead/readAllComplaintType`, data)
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.warn("Something went wrong");
      });
  };
  return (
    <div>
      <h1 className="text-center">Department Complains List</h1>
      {tableData.length > 0 ? (
        <table className="table table-striped" style={{ color: "white" }}>
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
                return (
                  <tr>
                    <td>{item.complaint_ID}</td>
                    <td>{item.date}</td>
                    <td> {item.type}</td>
                    <td> {item.priority}</td>
                    <td> {item.address}</td>
                    <td> {item.description}</td>
                    <td>
                      <Adminmodal itemData={item} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div>
          <h2>No Complaints To Show</h2>
        </div>
      )}
    </div>
  );
}

export default AdminComplains;

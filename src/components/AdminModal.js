import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";

function Adminmodal(props) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(props.itemData.status);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStatus = (e) => setStatus(e.target.value);
  const handleUpdateStatus = () => {
    axios
      .put("http://localhost:8080/complain/updateStatus", {
        complaint_ID: props.itemData.complaint_ID,
        status: status,
      })
      .then((response) => {
        handleClose();
        swal("Success", "Complain Status Updated", "success");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Status
      </Button>

      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Complain </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {" "}
            <strong>Complaint ID: </strong> {props.itemData.complaint_ID}
          </p>
          <p>
            <strong>Priority: </strong>
            {props.itemData.priority}
          </p>
          <p>
            <strong>Description: </strong>
            {props.itemData.description}
          </p>
          <p>
            <strong>Status: </strong>
            <select value={status} onChange={handleStatus}>
              <option value="Resolved">Resolved</option>
              <option value="Intiated">Initiated</option>
              <option value="Rejected">Rejected</option>
            </select>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateStatus}>
            Update Status
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Adminmodal;

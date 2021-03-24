import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";

function Adminmodal(props) {
  const [show, setShow] = useState(false);

  const [changeData, setChangeData] = useState({
    status: props.itemData.status,
    remarks: "",
    complaint_ID: props.itemData.complaint_ID,
  });

  const handleForm = () => {
    putDataonServer(changeData);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const putDataonServer = (data) => {
    axios
      .put("http://localhost:8080/complain/updateStatus", data)
      .then((response) => {
        handleClose();
        swal("Success", "Complain Status Updated", "success");
        window.location.reload();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  if (changeData.status === "Resolved")
    return (
      <>
        <Button variant="success btn-sm" disabled="true" onClick={handleShow}>
          Resolved
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
              <select
                value={changeData.status}
                onChange={(e) =>
                  setChangeData({ ...changeData, status: e.target.value })
                }
              >
                <option value="Resolved">Resolved</option>
                <option value="Intiated">Initiated</option>
                <option value="Rejected">Rejected</option>
              </select>
            </p>
            <p>
              <strong>Remarks:</strong>
              <textarea
                class="input--style-4 border border-white"
                cols="50"
                style={{ height: "100px" }}
                value={changeData.remarks}
                onChange={(e) =>
                  setChangeData({ ...changeData, remarks: e.target.value })
                }
              ></textarea>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleForm}>
              Update Status
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  else if (changeData.status === "Rejected")
    return (
      <>
        <Button variant="danger btn-sm" disabled="true" onClick={handleShow}>
          Rejected
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
              <select
                value={changeData.status}
                onChange={(e) =>
                  setChangeData({ ...changeData, status: e.target.value })
                }
              >
                <option value="Resolved">Resolved</option>
                <option value="Intiated">Initiated</option>
                <option value="Rejected">Rejected</option>
              </select>
            </p>
            <p>
              <strong>Remarks:</strong>
              <textarea
                class="input--style-4 border border-white"
                cols="50"
                style={{ height: "100px" }}
                value={changeData.remarks}
                onChange={(e) =>
                  setChangeData({ ...changeData, remarks: e.target.value })
                }
              ></textarea>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleForm}>
              Update Status
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  else
    return (
      <>
        <Button variant="primary btn-sm" onClick={handleShow}>
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
              <select
                value={changeData.status}
                onChange={(e) =>
                  setChangeData({ ...changeData, status: e.target.value })
                }
              >
                <option value="Resolved">Resolved</option>
                <option value="Intiated">Initiated</option>
                <option value="Rejected">Rejected</option>
              </select>
            </p>
            <p>
              <strong>Remarks:</strong>
              <textarea
                class="input--style-4 border border-white"
                cols="50"
                style={{ height: "100px" }}
                value={changeData.remarks}
                onChange={(e) =>
                  setChangeData({ ...changeData, remarks: e.target.value })
                }
              ></textarea>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleForm}>
              Update Status
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Adminmodal;

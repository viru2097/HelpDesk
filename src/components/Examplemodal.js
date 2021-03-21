import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function Examplemodal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Status
      </Button>

      <Modal show={show} onHide={handleClose} style={{color: 'black'}}>
        <Modal.Header closeButton>
          <Modal.Title>Complain </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> <strong>Complaint ID: </strong> {props.itemData.complaint_ID}</p>
          <p><strong>Priority: </strong>{props.itemData.priority}</p>
          <p><strong>Description: </strong>{props.itemData.description}</p>
          <p><strong>Status: </strong>{props.itemData.status}</p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Examplemodal
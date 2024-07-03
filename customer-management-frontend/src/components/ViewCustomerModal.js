import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ViewCustomerModal = ({ show, onHide, customer }) => {
    if (!customer) return null;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>View Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>First Name:</strong> {customer.first_name}</p>
                <p><strong>Last Name:</strong> {customer.last_name}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Contact Number:</strong> {customer.contact_number}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewCustomerModal;

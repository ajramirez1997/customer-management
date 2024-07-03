import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const DeleteCustomerModal = ({ show, onHide, customer }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/customers/${customer.id}`, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        })
            .then(response => {
                onHide();
                window.location.reload();
            })
            .catch(error => console.error(error));
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete {customer?.first_name} {customer?.last_name}?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteCustomerModal;

import React, { useState } from 'react';
import axios from 'axios';

const AddCustomerModal = ({ show, onHide }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact_number: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/customers', formData, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        })
        .then(response => {
            console.log('Customer added successfully:', response.data);
            onHide();
            window.location.reload();
        })
        .catch(error => {
            console.error('Error adding customer:', error);
        });
    };
    

    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} style={{ zIndex: 1050 }} tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
    <form onSubmit={handleSubmit}>
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title w-100">Add Customer</h5>
                <button type="button" className="close" onClick={onHide} style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', cursor: 'pointer' }}>
                    <span aria-hidden="true" style={{ fontSize: '1.5rem', color: '#aaa', fontWeight: 'bold' }}>&times;</span>
                </button>

            </div>
            <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" className="form-control" id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact_number">Contact Number</label>
                        <input type="text" className="form-control" id="contact_number" name="contact_number" value={formData.contact_number} onChange={handleInputChange} />
                    </div>
            </div>
            <div className='modal-footer'>
                    <button type="submit" className="btn btn-primary">Add Customer</button>
                    <button type="submit" className="btn btn-secondary" onClick={onHide}>Close</button>
            </div>
        </div>
        </form>
    </div>
</div>

    );
};

export default AddCustomerModal;

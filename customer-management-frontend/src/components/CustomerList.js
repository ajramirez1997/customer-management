import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Pagination } from 'react-bootstrap';
import AddCustomerModal from './AddCustomerModal';
import ViewCustomerModal from './ViewCustomerModal';
import EditCustomerModal from './EditCustomerModal';
import DeleteCustomerModal from './DeleteCustomerModal';

const CustomerList = () => {
    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const customersPerPage = 5;

    const handleShowAddModal = useCallback(() => setShowAddModal(true), []);
    const handleCloseAddModal = useCallback(() => setShowAddModal(false), []);

    const handleShowViewModal = useCallback((customer) => {
        setSelectedCustomer(customer);
        setShowViewModal(true);
    }, []);

    const handleCloseViewModal = useCallback(() => setShowViewModal(false), []);

    const handleShowEditModal = useCallback((customer) => {
        setSelectedCustomer(customer);
        setShowEditModal(true);
    }, []);

    const handleCloseEditModal = useCallback(() => setShowEditModal(false), []);

    const handleShowDeleteModal = useCallback((customer) => {
        setSelectedCustomer(customer);
        setShowDeleteModal(true);
    }, []);

    const handleCloseDeleteModal = useCallback(() => setShowDeleteModal(false), []);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8000/api/customers?perPage=${customersPerPage}&page=${currentPage}`, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        })
        .then(response => {
            setCustomers(response.data.data);
            setLastPage(response.data.last_page);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [currentPage]);

    const columns = useMemo(
        () => [
            { Header: 'First Name', accessor: 'first_name' },
            { Header: 'Last Name', accessor: 'last_name' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Contact Number', accessor: 'contact_number' },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <Button variant="info" size="md" onClick={() => handleShowViewModal(row.original)}>View</Button>{' '}
                        <Button variant="warning" size="md" onClick={() => handleShowEditModal(row.original)}>Edit</Button>{' '}
                        <Button variant="danger" size="md" onClick={() => handleShowDeleteModal(row.original)}>Delete</Button>
                    </div>
                )
            }
        ],
        [handleShowViewModal, handleShowEditModal, handleShowDeleteModal]
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: customers
    });

    const handlePageChange = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Customers</h1>
            <Button variant="primary" className="mb-4" onClick={handleShowAddModal}>Add Customer</Button>

            <Table {...getTableProps()} bordered hover>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <Pagination>
                {Array.from({ length: lastPage }).map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>

            <AddCustomerModal show={showAddModal} onHide={handleCloseAddModal} />
            <ViewCustomerModal show={showViewModal} onHide={handleCloseViewModal} customer={selectedCustomer} />
            <EditCustomerModal show={showEditModal} onHide={handleCloseEditModal} customer={selectedCustomer} />
            <DeleteCustomerModal show={showDeleteModal} onHide={handleCloseDeleteModal} customer={selectedCustomer} />
        </div>
    );
};

export default CustomerList;

// EditForm.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';


const EditForm = ({ id, onClose, handleEdit }) => {
    const [formData, setFormData] = useState({
        name: '',
        version: '',
        model: '',
    });

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await Axios.get(`http://127.0.0.1:8000/cars/${id}`);
                if (response.data.status === 'success') {
                    setFormData(response.data.data);
                } else {
                    console.error('Failed to fetch item details');
                }
            } catch (error) {
                console.error('Error fetching item details from API', error);
            }
        };

        fetchItemDetails();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create a new object without the carsId property
            const { carsId, ...dataWithoutId } = formData;
            console.log('Data to be sent:', dataWithoutId);

            // Append a trailing slash to the URL
            const url = `http://127.0.0.1:8000/cars/${id}/`;

            const response = await Axios.put(url, dataWithoutId);
            console.log('Response from PUT request:', response.data);

            if (response.data.status === 'success') {
                console.log('Update successful');
                onClose(); // Close the modal or navigate back to the main page
                // Show a toast notification
                toast.success('Data updated successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                console.error('Failed to update item');
            }
        } catch (error) {
            console.error('Error updating item', error);
        }
    };



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCarName">
                <Form.Label>Car Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formCarVersion">
                <Form.Label>Car Version</Form.Label>
                <Form.Control type="text" name="version" placeholder="Enter version" value={formData.version} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formCarModel">
                <Form.Label>Car Model</Form.Label>
                <Form.Control type="text" name="model" placeholder="Enter model" value={formData.model} onChange={handleChange} />
            </Form.Group>

            <button className="btn btn-primary" type="submit">
                Update
            </button>
            <ToastContainer />

        </Form>

    );
}

export default EditForm;

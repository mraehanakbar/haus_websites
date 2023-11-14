import { NavbarComponent, FooterComponent } from "../../components";
import Axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./PostPage.css";

const PostPost = () => {
    const [carData, setCarData] = useState({
        name: "",
        version: "",
        model: "",
    });

    const handleChange = (event) => {
        setCarData({
            ...carData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.post("http://127.0.0.1:8000/cars/", carData);
            console.log("Response from POST request:", response.data);
            if (response.data.status === "success") {
                console.log("Success");
                // Show toast notification
                toast.success("Data posted successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                console.error("Failed to post car data");
            }
        } catch (error) {
            console.error("Error posting car data to API", error);
        }
    };

    return (
        <>
            <NavbarComponent />
            <div className="post">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formCarName">
                        <Form.Label>Car Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formCarVersion">
                        <Form.Label>Car Version</Form.Label>
                        <Form.Control type="text" name="version" placeholder="Enter version" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formCarModel">
                        <Form.Label>Car Model</Form.Label>
                        <Form.Control type="text" name="model" placeholder="Enter model" onChange={handleChange} />
                    </Form.Group>

                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </Form>
            </div>
            <ToastContainer />
            <FooterComponent />
        </>
    );
};

export default PostPost;

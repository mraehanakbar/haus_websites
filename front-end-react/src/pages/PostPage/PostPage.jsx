import { NavbarComponent, FooterComponent, EditForm } from "../../components";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import CardTest from "../../components/cardtest/cardtest";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import "./PostPage.css";

const PostPage = () => {
    const [carList, setCarList] = useState([]);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                const response = await Axios.get("http://127.0.0.1:8000/cars/");
                if (response.data.status === "success") {
                    setCarList(response.data.data);
                } else {
                    console.error("Failed to fetch car data");
                }
            } catch (error) {
                console.error("Error fetching car data from API", error);
            }
        };
        fetchCarData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await Axios.delete(`http://127.0.0.1:8000/cars/${id}`);
            if (response.data.status === "success") {
                // Show a toast for successful deletion
                toast.success("Data deleted successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                // After successful deletion, fetch the updated car list
                const updatedResponse = await Axios.get("http://127.0.0.1:8000/cars/");
                if (updatedResponse.data.status === "success") {
                    setCarList(updatedResponse.data.data);
                } else {
                    console.error("Failed to fetch updated car data");
                }
            } else {
                console.error("Failed to delete car data");
            }
        } catch (error) {
            console.error("Error deleting car data from API", error);
        }
    };

    const handleEdit = (id) => {
        // Open the edit form
        setIsEditOpen(true);
        setSelectedItemId(id);
    };

    const handleCloseEdit = () => {
        // Close the edit form
        setIsEditOpen(false);
        setSelectedItemId(null);
    };



    return (
        <>
            <NavbarComponent />

            <div className="container">
                <div className="container-post">
                    {carList.map((car, index) => (
                        <CardTest
                            key={index}
                            id={car.carsId}
                            name={car.name}
                            version={car.version}
                            model={car.model}
                            onDelete={handleDelete} // Pass the onDelete function
                            onEdit={handleEdit} // Pass the onEdit function
                        />
                    ))}
                </div>
            </div>

            <div className="post-button">
                <NavLink to="/test/post">
                    <button className="btn btn-primary" type="submit">
                        GO TO POST
                    </button>
                </NavLink>
            </div>


            {isEditOpen && (
                <EditForm id={selectedItemId} onClose={handleCloseEdit} />
            )}
            <ToastContainer />
            <FooterComponent />
        </>
    );
};

export default PostPage;

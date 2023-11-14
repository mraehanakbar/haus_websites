import { NavbarComponent, FooterComponent } from "../../components";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import CardTest from "../../components/cardtest/cardtest";
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import "./PostPage.css";

const PostPage = () => {
    const [carList, setCarList] = useState([]);

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
                // Filter out the deleted car from the car list
                setCarList((prevCarList) => prevCarList.filter((car) => car.id !== id));
                console.log("Success");
            } else {
                console.error("Failed to delete car data");
            }
        } catch (error) {
            console.error("Error deleting car data from API", error);
        }
    };


    return (
        <>
            <NavbarComponent />

            <div className="container">
                <div className="container-post">
                    <div className="row">
                        {carList.map((car, index) => (
                            <CardTest
                                key={index}
                                id={car.carsId}
                                name={car.name}
                                version={car.version}
                                model={car.model}
                                onDelete={handleDelete} // Pass the onDelete function
                            />
                        ))}
                    </div>
                </div>
            </div>

            <NavLink to="/test/post">
                <button className="btn btn-primary" type="submit">
                    GO TO POST
                </button>
            </NavLink>

            <FooterComponent />
        </>
    );
};

export default PostPage;

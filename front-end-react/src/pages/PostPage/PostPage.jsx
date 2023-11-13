import { NavbarComponent, FooterComponent } from "../../components";
import Axios from "axios";
import React, { useEffect, useState } from "react";

const PostPage = () => {
    const [carData, setCarData] = useState(null);

    useEffect(() => {

        const fetchCarData = async () => {
            try {
                const response = await Axios.get("http://127.0.0.1:8000/cars/");
                if (response.data.status === "success") {

                    setCarData(response.data.data);
                    console.log(response.data.data);
                } else {

                    console.error("Failed to fetch car data");
                }
            } catch (error) {

                console.error("Error fetching car data from API", error);
            }
        };


        fetchCarData();
    }, []);

    return (
        <>
            <NavbarComponent />

            <div className="container">
                {carData && carData.map((car) => (
                    <div className="card" key={car.id}>
                        <div className="card-body">
                            <h5 className="card-title">{car.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {car.version}
                            </h6>
                            <p className="card-text">{car.model}</p>
                        </div>
                    </div>
                ))}
            </div>

            <FooterComponent />
        </>
    );
};

export default PostPage;

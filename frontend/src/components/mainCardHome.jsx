import React from "react";

export const MainCardHome = ({ title, subtitle, body, description }) => {
    return (
        <div className="card w-100 mb-5 ">
            <div className="card-body bg-default p-10 d-flex ">
                <div className="align-items-center">
                    <h5 className="card-subtitle fw-light text-white">
                        {subtitle}
                    </h5>
                    <h3 className="title text-dark fs-2 my-3 text-white">
                        {title}
                    </h3>
                    <p className="card-text text-white">
                        {body}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </p>
                    <p className="card-text my-3 text-white">
                        {description}
                    </p>
                    <div className="btn  mx-3 px-5" style={{ backgroundColor: "#ffffff", color: "#13229d" }}>
                        Solicitar
                    </div>
                    <div className="btn btn-outline mx-3 px-5 text-white" style={{ borderColor: "white", color: "white" }}>
                        Ver más...
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    <img src="src\img\frankie.png" alt="Icono" style={{ width: "40%", height: "100%", maxHeight: "100%" }}/>
                </div>
            </div>
        </div>
    );
};

import React from "react";

export const CardHome = ({ title, image, body, services, salario = null }) => {
    
    const truncatedBody = body.slice(0, 20); //Maximo 20 caracteres, sino se desborda por el height
    
    return (
        <div className="card my-4 w-100 card-height" style={{ backgroundColor: "#7898E8", border: "none" }}>
            <div className="row g-0 justify-content-center">
                {services? null : <div className="col-md-4"><img src={image} className="image-card-container" alt="..." style={{ borderRadius: "80%", width: "80%", padding: "10px" }}></img></div>}
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-white">{title}</h5>
                        <p className="card-text text-white" style={{ fontSize: "16px", whiteSpace: "pre-line" }} > { truncatedBody }
                            {services? null : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>}
                        </p>
                        {services ? <p className="card-text text-white" style={{ fontSize: "16px", whiteSpace: "pre-line" }}> Salario: ${salario}</p> : null}
                        {services ? null : <p className="card-text text-white">Ver mas...</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

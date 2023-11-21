import React from "react";

const CardLateral = () => {
    return (
        <div className="row bchica">
            <div className="card-body col-6" style={{ width: "150px" }}>
                <p className="text-center textoDestacado">CONTACTO</p>
            </div>

            <div className="card col-6 align-items-center justify-content-center" style={{ backgroundColor: '#7898E8' }}>
                <button className="btn btn-primary d-auto justify-content-center" style={{ backgroundColor: "#12229D", width: "150px" }}>WHATSAPP</button>
            </div>
        </div>
    );
}

export default CardLateral;

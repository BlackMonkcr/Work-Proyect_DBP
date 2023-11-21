import React from "react";

export const ProfileWorker = ({ name, email, occupation , phone, description,imageUrl}) => {
    return (
        <div className="row" style={{backgroundColor: '#7898E8'}}>
            <div className="card-body col-6 p-0 h-auto"  >
                <div className="col-10">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-12 mt-5 p-5">
                                <h1 className="text-light fs-1 fst-italic my-3">{name}</h1>
                            </div>
                            <div className="col-12">
                                <p className="text-light fs-5">Email: {email}</p>
                            </div>
                            <div className="col-12">
                                <p className="text-light fs-5">Numero: {phone}</p>
                            </div>

                            <div className="col-12">
                                <p className="text-light fs-5">Ocupacion: {occupation}</p>
                            </div>

                            <div className="col-12">
                                <p className="text-light fs-5">Descripcion: {description}</p>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-end">
                                {imageUrl && <img src={imageUrl} alt="Imagen de ocupación" className="img-fluid" style={{ borderRadius: "100%", width: "200px", height: "200px" }}/>}
                            </div>
                        
                        </div>
                    </div>
                    
                </div>

 
            </div>
            <div className="card col-6 align-auto bg-default p-0 h-auto" ></div>

        </div>
   
        
    );
};
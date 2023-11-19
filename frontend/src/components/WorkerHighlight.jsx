import React from 'react';

function WorkerHighlight({ worker }) {
  if (!worker) {
    // Manejar el caso en que el trabajador no está definido
    return (
      <div className="worker-highlight py-0 modificacion-worked mt-0">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card w-100 mb-3 mt-4">
                        <div className="card-body bg-default p-5">
                            <h5 className="card-subtitle fw-light">Trabajador Destacado de la semana</h5>
                            <h3 className="title text-dark fs-2 my-3">Frankie Ruiz</h3>
                            <p className="card-text">San Borja 4.9 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </p>
                            <p className="card-text my-3">Descripción sobre el trabajador</p>
                            <div className="btn btn-primary mx-3 px-5">
                                Solicitar
                            </div>
                            <div className="btn btn-primary mx-3 px-5">
                                Ver más...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <h2 className="text-center my-1">Sugeridos</h2>
                </div>
                <div className="col-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                               <div className="card my-4 w-100">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\fondo-login.png" className="image-card-container" alt="..."></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card my-4 w-100">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\fondo-login.png" className="image-card-container" alt="..."></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                               <div className="card my-4 w-100">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\fondo-login.png" className="image-card-container" alt="..."></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card my-4 w-100">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\fondo-login.png" className="image-card-container" alt="..."></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    );
  }

  return (
    <div className="worker-highlight">
      <h2>Trabajador Destacado</h2>
      <div className="highlighted-worker">
        <img src={worker.avatar} alt={worker.name} />
        <div className="worker-details">
          <h3>{worker.name}</h3>
          <p>{worker.description}</p>
        </div>
      </div>

      <h2>Trabajadores Sugeridos</h2>
      <div className="suggested-workers">
        {/* Aquí puedes mostrar una lista de trabajadores sugeridos */}
      </div>
    </div>
  );
}

export default WorkerHighlight;

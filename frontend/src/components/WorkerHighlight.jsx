import React from 'react';

function WorkerHighlight({ worker }) {
  if (!worker) {
    // Manejar el caso en que el trabajador no está definido
    return (
      <div className="worker-highlight py-0 modificacion-worked mt-5">
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-12 mt-5">
                    <div className="card w-100 mb-5 ">
                        <div className="card-body bg-default p-10 d-flex ">
                        
                            <div className="align-items-center">
                                <h5 className="card-subtitle fw-light text-white">Trabajador Destacado de la semana</h5>
                                <h3 className="title text-dark fs-2 my-3 text-white">Frankie Ruiz</h3>
                                <p className="card-text text-white">San Borja 4.9 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </p>
                                <p className="card-text my-3 text-white">Descripción sobre el trabajador</p>
                                <div className="btn  mx-3 px-5" style={{ backgroundColor: '#ffffff', color: '#13229d'}}>
                                    Solicitar
                                </div>
                                <div className="btn btn-outline mx-3 px-5 text-white" style={{ borderColor: 'white', color: 'white' }}>
                                    Ver más...
                                </div>
                            </div>
                            <div className="col-md-6 text-end">
                                <img
                                    src="src\img\frankie.png"
                                    alt="Icono"
                                    style={{ width: '40%', height: '100%', maxHeight: '100%' }}
                                />
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
                               <div className="card my-4 w-100" style={{ backgroundColor: '#7898E8', border: 'none' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\image1.jpeg" className="image-card-container" alt="..." style={{ borderRadius: '80%',width: '80%', padding: '10px'}}></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-white">Manuel Tafur</h5>
                                                <p className="card-text text-white" style={{ fontSize: '14px' }}>Chorillos 3.9 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                </p>
                                                <p className="card-text text-white">...Ver mas</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card my-4 w-100" style={{ backgroundColor: '#7898E8', border: 'none' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\image2.jpeg" className="image-card-container" alt="..." style={{ borderRadius: '80%',width: '80%', padding: '10px'}}></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-white">Luis Romero</h5>
                                                <p className="card-text text-white" style={{ fontSize: '14px' }}>Chorillos 3.5 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                </p>
                                                <p className="card-text text-white">...Ver mas</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                               <div className="card my-4 w-100" style={{ backgroundColor: '#7898E8', border: 'none' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\image3.jpeg" className="image-card-container" alt="..." style={{ borderRadius: '80%',width: '80%', padding: '10px'}}></img>
                                        </div>
                                        <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title text-white">Brando Carrea</h5>
                                                    <p className="card-text text-white" style={{ fontSize: '14px' }}>Chorillos 3.3 
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                    </p>
                                                    <p className="card-text text-white">...Ver mas</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card my-4 w-100" style={{ backgroundColor: '#7898E8', border: 'none' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="src\img\image4.jpeg" className="image-card-container" alt="..." style={{ borderRadius: '80%',width: '80%', padding: '10px' }}></img>
                                        </div>
                                        <div className="col-md-8">
                                        <div className="card-body">
                                                <h5 className="card-title text-white">Francisco Perez</h5>
                                                <p className="card-text text-white" style={{ fontSize: '14px' }}>Chorillos 3.3 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill mb-1 ms-3" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                </p>
                                                <p className="card-text text-white">...Ver mas</p>
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

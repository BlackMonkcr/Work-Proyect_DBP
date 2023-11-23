import React from 'react';

const WorkerCards = () => {
  const cardStyle = {
    width: '18rem', // Ancho de la tarjeta
    margin: '10px', // Espacio entre tarjetas
  };

  const imageStyle = {
    maxWidth: '100%', // Ajuste de la imagen
    height: 'auto',
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        {/* Replica esta estructura para las otras siete tarjetas */}
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3"> {/* Ajusta el tamaño de la columna para el diseño responsivo */}
          <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="Worker Image" style={imageStyle} />
            <div className="card-body">
              <h5 className="card-title">Nombre del Trabajador 1</h5>
              <p className="card-text">Dirección del Trabajador 1</p>
              <p className="card-text">Valoración: 4.5</p>
              <a href="#" className="btn btn-primary btn-sm">Ver más...</a>
            </div>
          </div>
        </div>
        
        {/* Repite lo mismo para las otras seis tarjetas */}
      </div>
    </div>
  );
};

export default WorkerCards;

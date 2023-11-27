import React from 'react';

const WorkerCards = ({ workers }) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  const displayedWorkers = workers.slice(0, 8);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        {displayedWorkers.map((worker, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card" style={cardStyle}>
              <img src={`https://unavatar.io/${worker.keyProfilePicture}`} className="card-img-top" alt={`Worker Image ${index}`} style={imageStyle} />
              <div className="card-body">
                <h5 className="card-title">{worker.name}</h5>
                <p className="card-text">{worker.occupation}</p>
                <p className="card-text">Contacto: {worker.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerCards;

import React from 'react';
import ContactCard from './ContactCard'; // Asegúrate de importar correctamente el componente ContactCard desde la ubicación adecuada

const CardsMessages = ({ favoriteWorkers, openWhatsApp }) => {
  return (
    <div className="container">
      {favoriteWorkers.map((worker, index) => (
        <ContactCard
          key={index}
          name={worker.name}
          occupation={worker.occupation}
          phone={worker.phoneNumber} // Asegúrate de que el campo sea phoneNumber o el correcto
          openWhatsApp={openWhatsApp}
        />
      ))}
    </div>
  );
};

export default CardsMessages;





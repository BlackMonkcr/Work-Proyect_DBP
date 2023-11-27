import React from 'react';

const ContactCard = ({ name, occupation, phone, openWhatsApp }) => {
    const handleWhatsApp = () => {
        openWhatsApp(phone); // Llama a la función openWhatsApp con el número de teléfono
    };

    return (
        <div className="card w-75 mb-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{occupation}</p>
                <button onClick={handleWhatsApp} className="btn btn-primary">WhatsApp</button>
            </div>
        </div>
    );
};

export default ContactCard;

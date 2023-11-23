import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff', // Color de fondo blanco
    padding: '10px 0', // Ajusta el relleno superior e inferior según sea necesario
    textAlign: 'center',
  };

  return (
    <div style={footerStyle}>
      {/* Contenido del pie de página */}
      <p>Este es el pie de página</p>
    </div>
  );
};

export default Footer;

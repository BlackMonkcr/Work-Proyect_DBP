import React from "react";

const MainCardHomeWorker = ({
  id,
  name,
  occupation,
  description,
  keyProfilePicture,
  isFavorite,
  handleOnClick,
}) => {
  if (description.length > 40) {
    description = description.substring(0, 40) + "...";
  }

  return (
    <div className="card w-100 mb-5 ">
      <div className="card-body bg-default p-10 d-flex">
        <div className="align-items-center">
          <h3 className="title text-dark fs-2 my-3 text-white">
            {name}
            {/* Botón para marcar como favorito */}
            <button onClick={handleOnClick} className="favorite-button">
              {isFavorite ? "Quitar de Favoritos" : "Añadir a Favoritos"}
            </button>
          </h3>
          <p className="card-text text-white">{occupation}</p>
          <p className="card-text my-3 text-white">{description}</p>
        </div>
        <div className="col-md-6 text-end">
          <img
            src={`https://unavatar.io/${keyProfilePicture}`}
            alt="Icono"
            style={{
              width: "200px",
              height: "200px",
              maxHeight: "200px",
              borderRadius: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCardHomeWorker;

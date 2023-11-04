import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Home.css";
import NavBar from "./NavBar";
import NavWorkersPreview from "./NavWorkersPreview";
import NavBarInfo from "./NavBarInfo";

function Home() {
  // Get the 3 first users from the database
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "/client/favorite_workers?id=1&limit=3",
      baseUrl: "work.up.railway.app",
    })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUsers]);

  /*--------------------------RETURN COMPONENT--------------------------*/

  return (
    <>
      {/* Agrega la barra de búsqueda aquí */}
      <div class="nav">
  <div class="search-bar">
    <input type="text" placeholder="Electricista, Pintor, etc..." />
  </div>
  <div class="home">
    <a href="#">Home</a>
  </div>
</div>



      <NavBar />
      <NavWorkersPreview
        favoriteWorkers={users}
        historyWorkers={users}
      />
      <NavBarInfo />
    </>
  );
}

export default Home;

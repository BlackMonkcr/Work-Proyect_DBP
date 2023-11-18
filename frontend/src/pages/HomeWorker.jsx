import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import NavWorkersPreview from "../components/NavWorkersPreview";//puedo utilizarlo para mostrar su plan
import NavBarInfo from "../components/NavBarInfo";

function HomeWorker() {
  // Get the 3 first users from the database
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      baseURL: "http://work.up.railway.app/",
      url: "client/favorite_workers?id=1&limit=3",
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
      



      <NavBar />
      <NavWorkersPreview
        favoriteWorkers={users}
        historyWorkers={users}
      />
      <NavBarInfo title="Home Worker" />
    </>
  );
}

export default HomeWorker;

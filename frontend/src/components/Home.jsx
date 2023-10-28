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
      url: "http://localhost:8080/user/limits?limit=3",
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
      <NavBarInfo />
    </>
  );
}

export default Home;

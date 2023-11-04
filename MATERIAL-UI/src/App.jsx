//import { Button } from "@mui/material";
import { Container, Typography } from "@mui/material";
//import Button from "@mui/material/Button";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/principalCont/Landing";



export default function App(){
  
  return(
    <>
      <Navbar/>
      <Container  sx={{mt:0}}></Container>
      <Landing />
      
    </>
  );
}

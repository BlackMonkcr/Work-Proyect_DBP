import { Container } from "@mui/material";
import Navbar from "./components/navbar";
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

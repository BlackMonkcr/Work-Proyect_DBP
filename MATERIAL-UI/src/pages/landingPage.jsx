import { NavBar } from "../components/navbar.jsx";
import { Grid, Container, Box } from '@mui/material';
import "../css/landingPage.css"

export const Landing = () => {
    return (
    <Container maxWidth={false} style={{position:"static", padding:"0", marginLeft:"0px", marginRight:"0"}} >
        <NavBar/>
        <Grid container className="box-img">
            <Grid item sm={7} lg={5} xl={7} style={{background: '#ededed', maxWidth:'40vw'}} className="box-info"> 
                <Box className="box-info-contain" style={{margin:"0 50px"}}>
                    <h1 className="title">WORK+</h1>
                    <h2 className="sub-title">Flexibilidad, Independencia & Conexion</h2>
                    <p><span>La conexión que necesitas para trabajar con flexibilidad e independencia.</span><br></br>
                    En WORK+, conectamos a trabajadores independientes con clientes de todo tipo. Nuestros servicios te permiten trabajar desde cualquier lugar, en tus propios horarios y con tus propios términos.</p>
                    <button className="bx_containt-button">Comienza a trabajar</button>
                </Box>
            </Grid>
        </Grid>
        <div className="box-img2">

        </div>
    </Container>
    );
    
};
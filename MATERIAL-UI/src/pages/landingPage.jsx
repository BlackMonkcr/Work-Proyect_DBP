import { NavBar } from "../components/navbar.jsx";
import { Grid,Button, Container, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import "../css/landingPage.css"

export const Landing = () => {
    return (
    <Container maxWidth={false} style={{position:"static", padding:"0", marginLeft:"0px", marginRight:"0"}} >
        <NavBar/>
        <Grid container>
            <Grid item sm={7} lg={5} xl={7} style={{background: 'radial-gradient(farthest-corner circle at 0% 0%, #f3f6f9 100%, #f0f7ff 80%)', maxWidth:'40vw'}} className="box-info"> 
                <Box className="box-info-contain" style={{margin:"0 50px"}}>
                    <h1 className="title">WORK+</h1>
                    <h2 className="sub-title">Flexibilidad, Independencia & Conexion</h2>
                    <p><span>La conexión que necesitas para trabajar con flexibilidad e independencia.</span><br></br>
                    En WORK+, conectamos a trabajadores independientes con clientes de todo tipo. Nuestros servicios te permiten trabajar desde cualquier lugar, en tus propios horarios y con tus propios términos.</p>
                    <button className="bx_containt-button">Comienza a trabajar</button>
                </Box>
            </Grid>
    
            <Grid item sm={5} lg={5} xl={5}  >
                <Grid container style={{marginTop:'70px'}}>
                    <Grid item sm={6} lg={6} xl={6} padding={2} className="mx-auto">
                        <Avatar style={{width:"100%", height:"100%", borderRadius:"0px"}} alt="Travis Howard" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRunT_pAzzZGqRe81m2vBGx5px6TiPyjrvGCbmGJov7CJvkmvY3" />
                    </Grid>               
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
    
};
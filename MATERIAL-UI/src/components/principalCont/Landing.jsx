
import React from "react";

import { Grid,Button, Container, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import 'bootstrap/dist/css/bootstrap.min.css';


function Landing() {
  return (
    <Container  maxWidth={false} style={{position:"static",padding:"0",marginLeft:"20px",marginRight:"0"}}  >
        <Grid
        container
        
      >
        <Grid item
          sm={8}
          lg={8}
          xl={8}
        > 
          <Box  sx={{borde:2,margin:"100px 100px 50px 150px"}}>
          <h1  sx={{ marginLeft: '10px',}} className="display-1 text-primary titulo"  >Work</h1>

          <h2 className="display-2 titulo">flexibilidad,</h2>
          <h2 className="display-2 titulo">independencia &</h2>
          <h2 className="display-2 titulo">conexion.</h2>

          <Button className="fs-1 mt-5 w-100" color="primary" variant="contained"  sx={{  color: '#fffcf2' , borderRadius: 3, margin: 'auto', display: 'flex' }}>Comienza a trabajar</Button>

          </Box>
        </Grid>

        <Grid item
          sm={4}
          lg={4}
          xl={4}
        >
                <Grid sm={12}>
                    <Grid Container>
                        <Grid item sm={12} padding={5}>
                              <div className="card"   style={{color: '#5271FF',width: "18rem"}}>
                                  <Avatar style={{width:"100%", height:"200px", borderRadius:"0px"}} alt="Travis Howard" src="./../../public/imagenes/jardinero.png" />
                                    <div className="card-body">
                                      <h5 className="card-title text-center">Conecta tu talento</h5>
                                      
                                      
                                  </div>
                              </div>
                        </Grid>

                        <Grid item sm={12} padding={5}>
                            <div className="card ms-5"   style={{color: '#5271FF',width: "18rem"}}>
                                  <Avatar style={{width:"100%", height:"200px", borderRadius:"0px"}} alt="Travis Howard" src="./../../public/imagenes/vidriero.png" />
                                    <div className="card-body">
                                      <h5 className="card-title text-center">Card title</h5>
                                      
                                      
                                  </div>
                              </div>
                        </Grid>

                        
                    </Grid>
                </Grid> 


        </Grid>
        
      </Grid>

    </Container>
  );
}

export default Landing;

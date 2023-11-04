import React, { useState, useEffect } from "react";
import { NavBar } from "../components/navbar/navbar";
import { Grid,Button, Container, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export const Landing = () => {
    return (
    <Container maxWidth={false} style={{position:"static", padding:"0", marginLeft:"0px", marginRight:"0"}} >
        <NavBar/>
        <Grid container>
            <Grid item sm={7} lg={7} xl={7}  > 
                <Box className="d-flex flex-column justify-content-start align-items-start" style={{borde:2, margin:"120px 50px 50px 60px"}}>
                    <h1 style={{ marginLeft: '10px',}} className="display-1 text-primary titulo">Work</h1>
                    <h2 className="titulo lh-1">flexibilidad,</h2>
                    <h2 className="titulo lh-1">independencia &</h2>
                    <h2 className="titulo lh-1">conexion.</h2>
                    <Button className="fs-3 mt-5 me-auto fw-bolder"  variant="contained" style={{ color: '#fffcf2' , borderRadius: 3 , background: '#5e7ce2'}}>Comienza a trabajar</Button>
                </Box>
            </Grid>
    
            <Grid item sm={5} lg={5} xl={5} style={{background: 'radial-gradient(farthest-corner circle at 0% 0%, #f3f6f9 100%, #f0f7ff 80%);', borderRadius:'10px'}} >
                <Grid >
                    <Grid item sm={12} padding={2}>
                        <div className="card border border-3 border-primary rounded-2" style={{color: '#5271FF'}}>
                            <Avatar style={{width:"100%", height:"300px", borderRadius:"0px"}} alt="Travis Howard" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRunT_pAzzZGqRe81m2vBGx5px6TiPyjrvGCbmGJov7CJvkmvY3" />
                        </div>
                    </Grid>
                    <Grid item sm={12} padding={2}>
                        <div className="card ms-5 border border-primary border-3 rounded-2" style={{color: '#5271FF'}}>
                            <Avatar style={{width:"100%", height:"300px", borderRadius:"0px"}} alt="Travis Howard 2" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-dsSlDOTC72_Zwa1kzH1V23D6dvRxSI3sHa2_Y2RpggtMw-Tr" />
                        </div>
                    </Grid>            
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
    
};
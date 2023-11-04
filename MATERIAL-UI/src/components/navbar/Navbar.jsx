import { AppBar,Button,Drawer, Icon, IconButton, Toolbar, Typography } from "@mui/material";


import AddIcon from '@mui/icons-material/Add';
import  "./Style.css";

export default function Navbar(){
    

    return(
        <>
        <AppBar position="static" color="secondary">
            <Typography variant="h7" color="primary"  style={{ fontWeight: 'bold',textAlign: 'center' }}>15 DÍAS DE PRUEBA GRATIS!</Typography> 
        </AppBar>
        <AppBar position="static" style={{ background: 'linear-gradient(to right, #4cc9f0, #4361ee)'}}>

            <Toolbar >
                <Icon color="secondary" >  
                    <AddIcon/> 
                </Icon>
                <Typography variant="h5" color="secondary" sx={{ marginRight: '20px' }} style={{ fontWeight: 'bold', textShadow: '1px 0px 0px rgb(128, 128, 128' }}>Work</Typography>
                    
                <Button color="secondary" sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Compañía</Button> 
                <Button color="secondary" sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Ayuda</Button>  
                <Button color="secondary"sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Contacto</Button>  

                <Button color="secondary"  sx={{ marginLeft: 'auto', marginRight: '5px',  fontSize: '15px'}}>Iniciar Sesion</Button>
                <Button color="secondary" variant="contained"  sx={{  marginRight: '10px',color: '#5271FF' , borderRadius: 3}}>Regístrate</Button>
            </Toolbar>
        </AppBar>
        </>
    );
}  

import { AppBar,Button, Icon, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
    
    return(
        <>
        
        <AppBar position="static" style={{ background: 'linear-gradient(to right, #9AB4FF, #12229D '}}>

            <Toolbar >
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="/img/logo.png" alt="Logo" width="100" height="30" className="d-inline-block align-text-top rounded rounded-2 mx-3"/>
                </a>                    
                <Button className="text-light" sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Compañía</Button> 
                <Button  className="text-light" sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Ayuda</Button>  
                <Button className="text-light" sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Contacto</Button> 

                <a className="text-decoration-none fw-light mx-2 text-light text-uppercase ms-auto" href="/login">
                    INICIAR SESION
                 </a>
                 <a className="text-decoration-none  fw-light  mx-2 text-uppercase btn btn-light text-primary mx-2 p-2" href="/register">
                    REGISTRATE
                 </a>
            </Toolbar>
        </AppBar>
        </>
    );
}  

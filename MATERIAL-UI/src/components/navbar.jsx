import { AppBar, Toolbar } from "@mui/material";
import "../css/landingPage.css"


export const NavBar = () => {
    
    return(
        <>
        
        <AppBar position="static" style={{ background: '#12229D', boxShadow: 'none', display: 'flex', justifyContent: 'center'}}>

            <Toolbar >
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="/img/isotipo-2.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top rounded rounded-2 mx-3"/>
                </a>
                <h1 className="text-navbar">Bienvenido a W+ PORTAL</h1>

                <a className="text-decoration-none fw-light mx-2 text-light ms-auto text-navbar text-navbar-options nv-op-signup" href="/login">
                    Login
                 </a>
                 <a className="text-decoration-none fw-light mx-3 btn btn-light p-1 px-2 text-navbar-options" href="/register">
                    Sign up
                 </a>
            </Toolbar>
        </AppBar>
        </>
    );
}  

import NavbarLateral from './NavbarLateral'
import Dppwapp from './Dwapp'

function NavPlanApp({plan}) {
    return(
        <section id="nav-preview-worker">
            
            <article id="nav-preview-worker_info">
                <NavbarLateral 
                    title="Tu Plan!" 
                    plan={plan}
                    expand
                    textExpand="Ver mas..."
                />
                 <Dppwapp 
                    
                    
                />
               
            </article>
        </section>
    )
}

export default NavPlanApp
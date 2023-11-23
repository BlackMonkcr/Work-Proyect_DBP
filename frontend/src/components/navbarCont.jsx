function NavbarCont({name, description,icono}) {
    
    return (
        <a href="#" >
            <article className="plan-preview-mini">
                
                <section className="worker-preview-mini_content">
                    
                    <header className="worker-preview-mini_header">
                    <img className="picture align-self-end" src={icono} alt="iconoPlan" />
                    <span className="h3">{name}</span>
                    
                       
                        <span className="workers-preview_expand text-center">{description}</span>
                        
                    
                    </header>


                </section>

            </article>
        </a>
    )
}

export default NavbarCont
import NavbarCont from "./navbarCont";

function NavbarLateral ({title}) {
    const planes = [
        {
          id: 1,
          name: 'Plan premiun',
          description: 'Al suscribirte a nuestro Plan Premium, disfrutarás de una serie de beneficios exclusivos que mejorarán tu experiencia laboral ',
          icono: 'src\\img\\estrella.png',
        },
      ];

    return (
        <section className="workers-preview">
            <h2 className="workers-preview_title">{title}</h2>
            <article className="plan-preview-info">
                {planes.map((plan) => (
                    <NavbarCont 
                        icono={plan.icono} 
                        name={plan.name}
                        description={plan.description}
                         
                    />
                ))}
                
            </article>
        </section>
    )
}

export default NavbarLateral
import WorkersPreview from './WorkersPreview'

function NavWorkersPreview({favoriteWorkers, historyWorkers}) {
    return(
        <section id="nav-preview-worker">
            <article id="nav-preview-worker_info">
                <WorkersPreview 
                    title="Tus Favoritos!" 
                    workers={favoriteWorkers}
                    expand
                    textExpand="Ver mas..."
                />

                <WorkersPreview 
                    title="Historial" 
                    workers={historyWorkers}
                    expand = {false}
                    textExpand=""
                />
            </article>
        </section>
    )
}

export default NavWorkersPreview;
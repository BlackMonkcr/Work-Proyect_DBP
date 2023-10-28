import WorkerPreviewMini from "./WorkerPreviewMini";

function WorkersPreview({title, workers, expand, textExpand}) {
    return (
        <section className="workers-preview">
            <h2 className="workers-preview_title">{title}</h2>
            <article className="workers-preview-info">
                {workers.map((worker) => (
                    <WorkerPreviewMini 
                        name={worker.name}
                        occupation={worker.occupation}
                        location={worker.location}
                        keyProfilePicture={worker.keyProfilePicture}
                    />
                ))}
                {(expand)? <a className="workers-preview_expand" href="#">{textExpand}</a> : ""}
            </article>
        </section>
    )
}

export default WorkersPreview
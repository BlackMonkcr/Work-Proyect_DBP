function WorkerPreviewMini({name, occupation, location, keyProfilePicture}) {
    return (
        <a href="#" >
            <article className="worker-preview-mini">
                <img className="worker-preview-mini_profile-picture" src={`https://unavatar.io/${keyProfilePicture}`} alt="profile-picture" />
                
                <header className="worker-preview-mini_header">
                    <span className="worker-preview-mini_name">{name}</span>
                    <span className="worker-preview-mini_info">{occupation}, {location}</span>
                </header>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 worker-preview-mini_button-more-info">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                </svg>
            </article>
        </a>
    )
}

export default WorkerPreviewMini
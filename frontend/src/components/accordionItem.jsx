import React, { useState } from "react";

function AccordionItem({question, answer, cont}) {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={cont} aria-expanded="true" aria-controls={cont}>
                    {question}
                </button>
                </h2>
                <div id={cont} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>{answer}</p>
                </div>
                </div>
            </div> 
        </>
    );
}

export default AccordionItem;

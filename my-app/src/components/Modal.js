import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal(props) {
    
    if (!props.isOpen){
        // Definimos una prop isOpen, para definir si se muestra el modal o no.
        return null;
    }

    return (
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <button onClick={props.onClose} className="Modal__close-button"> X </button>
                    {props.children}
                </div>
            </div>, 
            document.getElementById('modal')
        )
    )
}

// Lo que escribamos adentro de Modal en DeleteBadgeModal se vera gracias al {props.children}.
// Al darle click a la X, se cierra gracias a la funcion onClose, pasada como prop desde BadgeDetails.

export default Modal;
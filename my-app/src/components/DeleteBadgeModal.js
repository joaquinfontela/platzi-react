import React from 'react'

import Modal from './Modal'

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div>
            <h1>Are you sure?</h1>
            <p>You are about to delete this badge!</p>

            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                <button onClick={props.onClose} className='btn btn primary'>Cancel</button>
            </div>
        </div>
    </Modal>
}

// DeleteBadgeModal usa Modal para funcionar, es un modal especifico para borrar badges.
// La clase mr-4 en Delete es 'margin right 4', le da un poco de espacio hacia la derecha al boton.
// onClose, isOpen y onDelete son funciones pasadas desde BadgeDetails.

export default DeleteBadgeModal;
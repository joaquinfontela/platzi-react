import React from 'react'

import './styles/PageLoading.css'
import Loader from './Loader'

function PageLoading() {
    // Agregamos un loader creado por Richard para cuando la pagina este cargando.
    return (
        <div className="PageLoading">
            <Loader />
        </div>
    )
}

export default PageLoading;
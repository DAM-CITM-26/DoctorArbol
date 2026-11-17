import { useState } from 'react'
import { DOCUMENTOS } from '../data/datos.js'
import ListaDocumentos from '../components/ListaDocumentos.jsx'
import { filtrarPorEstado } from '../utils/documentos.js'
import Chips from '../components/Chips.jsx'

export default function Inicio() {
    const [filtro, setFiltro] = useState('Todos')
    const hoy = new Date().toISOString().slice(0, 10)
   const documentosFiltrados=filtrarPorEstado(DOCUMENTOS, filtro, hoy) 
    return(
          
        <section className="seccion stack">
            <Chips opciones={['Todos', 'Válido', 'Por caducar','Caducado']} valor={filtro} onCambio={setFiltro} />
            <p className="card-meta">{documentosFiltrados.length} documentos</p>
            <ListaDocumentos  documentos={documentosFiltrados} hoy={hoy} vacio="No hay documentos en este estado" />
        </section>
        
    )}
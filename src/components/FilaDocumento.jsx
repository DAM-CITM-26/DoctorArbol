
import EtiquetaEstado from './EtiquetaEstado.jsx'
import {
  trabajadorPorId,
  fechaCorta,
  estadoDocumento
} from '../utils/documentos.js'

export default function FilaDocumento({ documento, hoy }) {
  const trabajador = trabajadorPorId(documento.trabajadorId)
  const estado = estadoDocumento(documento, hoy)

  return (
    <li>
      <span
        className="avatar"
        style={{
          background: 'var(--color-primario)',
          color: 'var(--color-sobre-primario)'
        }}
      >
        {trabajador.nombre[0]}
      </span>

      <div className="crece enlace-fila">
        <h3>{documento.nombre}</h3>
        <p className="card-meta">
          {trabajador.nombre} · {documento.tipo} · caduca el {fechaCorta(documento.caduca)}
        </p>
      </div>

      <EtiquetaEstado estado={estado} />
    </li>
  )
}

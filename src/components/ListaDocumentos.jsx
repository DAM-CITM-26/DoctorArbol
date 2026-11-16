import FilaDocumento from './FilaDocumento.jsx'
import Vacio from './Vacio.jsx'

export default function ListaDocumentos({ documentos, hoy, vacio }) {
  if (documentos.length === 0) {
    return <Vacio icono="📄" texto={vacio} />
  }

  return (
    <ul className="list">
      {documentos.map((documento) => (
        <FilaDocumento
          key={documento.id}
          documento={documento}
          hoy={hoy}
        />
      ))}
    </ul>
  )
}
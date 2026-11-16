export default function ListaDocumentos({ documentos, hoy, vacio }) {
  if (documentos.length === 0) {
    return <p>{vacio}</p>
  }

  return null
}